const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const async = require('async');
const mime = require('mime');

// Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
  region: 'eu-north-1'
});

const bucketName = 'destinationsearch'; // Replace with your actual bucket name

// Function to upload image
const uploadImage = (filePath, bucketName, callback) => {
  const fileContent = fs.readFileSync(filePath);
  const contentType = mime.getType(filePath); // Get MIME type based on file extension
  const params = {
    Bucket: bucketName,
    Key: path.basename(filePath), // This will use the filename as the S3 key
    Body: fileContent,
    ContentType: contentType // Use detected MIME type
  };

  s3.upload(params, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { filePath, url: data.Location });
    }
  });
};

const imageDirectory = '../imagesupload/imagess3'; // Replace with the path to your images
const dataFilePath = '../src/assets/tour-packages.json'; // Replace with the path to your data file

fs.readdir(imageDirectory, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'));

  const urlMappings = [];

  async.eachLimit(imageFiles, 5, (fileName, callback) => {
    const filePath = path.join(imageDirectory, fileName);
    uploadImage(filePath, bucketName, (err, result) => {
      if (err) {
        console.error(`Failed to upload ${fileName}:`, err);
      } else {
        console.log(`Uploaded ${fileName}: ${result.url}`);
        urlMappings.push({ fileName: path.basename(fileName, path.extname(fileName)), url: result.url });
      }
      callback(err);
    });
  }, (err) => {
    if (err) {
      console.error('Error in batch upload:', err);
    } else {
      console.log('All images uploaded successfully.');
      updateDataFile(urlMappings);
    }
  });
});

// Function to update data file with URL mappings
const updateDataFile = (urlMappings) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Could not read data file.', err);
      return;
    }

    let tourPackages = JSON.parse(data);
    tourPackages = tourPackages.map(pkg => {
      const mainImageMapping = urlMappings.find(mapping => mapping.fileName.toLowerCase() === pkg.location.toLowerCase());
      if (mainImageMapping) {
        pkg.imageUrl = mainImageMapping.url;
      }

      pkg.additionalImages = pkg.additionalImages.map(image => {
        const additionalImageMapping = urlMappings.find(mapping => mapping.fileName.toLowerCase() === path.basename(image, path.extname(image)).toLowerCase());
        return additionalImageMapping ? additionalImageMapping.url : image;
      });

      return pkg;
    });

    fs.writeFile(dataFilePath, JSON.stringify(tourPackages, null, 2), 'utf8', err => {
      if (err) {
        console.error('Could not write updated data file.', err);
      } else {
        console.log('Data file updated successfully.');
      }
    });
  });
};
