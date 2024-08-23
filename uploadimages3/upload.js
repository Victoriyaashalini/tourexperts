const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure AWS SDK
AWS.config.update({
    accessKeyId: AKIAW3MEAEPJ7BNOALQ3, // Store in .env file
    secretAccessKey: u+XisQQP9x7godBI3avNrerTPlyLzM6Cp6Xiwr8, // Store in .env file
    region: 'eu-north-1' // Your S3 bucket region
});

const s3 = new AWS.S3();
const bucketName = 'destinationsearch '; // Replace with your S3 bucket name

// Path to your JSON file
const jsonFilePath = path.join(__dirname, '../src/assets/tour-packages.json');

// Function to upload a single image to S3 using the location name
function uploadImageToS3(fileName, location) {
    const filePath = path.join(__dirname, '../imagesupload/imagess3', fileName);
    const fileContent = fs.readFileSync(filePath);

    const params = {
        Bucket: bucketName,
        Key: `${location}/${fileName}`, // Save the image with the location name as part of the key
        Body: fileContent,
        ContentType: 'image/jpeg' // Change based on your image type
    };

    return s3.upload(params).promise();
}

// Function to update the JSON file with the new S3 URL
function updateJsonFile(fileName, url) {
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    jsonData.forEach(package => {
        if (package.imageFileName === fileName) {
            package.imageUrl = url;
        }
    });

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
}

// Function to upload all images and update the JSON file
async function uploadAllImages() {
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    for (const package of jsonData) {
        const fileName = package.imageFileName;
        const location = package.location;

        try {
            const data = await uploadImageToS3(fileName, location);
            console.log(`File uploaded successfully. ${data.Location}`);

            // Update JSON file with the S3 URL
            updateJsonFile(fileName, data.Location);
        } catch (err) {
            console.error(`Error uploading file ${fileName}:`, err.message);
        }
    }

    console.log('All images uploaded and JSON updated.');
}

uploadAllImages();
