# Echo

---

Echo is a powerful web application that enables users to convert video files or YouTube videos to audio files and share them on a platform that supports timestamped commenting. It is built using Node.js, Express.js, React.js, Redux, Prisma ORM, and PostgreSQL. Echo provides user authorization and authentication, ensuring a secure and personalized experience for its users.

---

## Features

- Convert video to audio: Users have the option to either upload videos from their local machine or provide a YouTube video URL in order to extract the audio.
- Timestamps: Users can add timestamps to the audio and associate comments with each specific timestamp, allowing others to play the audio from those timestamps.
- Search: Enables users to search for audio files based on their title or description.
- Enhanced Audio Playback Control: Effortlessly Navigate 5 Seconds Forward, Backward, Play, Pause, and Track Progress with Progress Bar Controls
- User Registration/Authentication: Empowers users to sign up or log in, granting them the ability to upload audio files.
- Notification : The notification feature in Echo is designed to display error messages whenever an error occurs.(Used React Toastify)

---

## Run Locally

Clone the project

```bash
  git clone https://github.com/Akshat2403/EchoApp
```

Go to the project directory

```bash
  cd EchoApp
```

Install dependencies

```bash
  yarn install
```

#### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`: `Your PostgreSQL DATABASE_URL`

`JWT_SECRETKEY`:`JWT_SECRETKEY`

`PORT`:`Open Port for the Server (default:5000)`

Migrate the Schema

```bash
  cd server
```

```bash
  npx prisma migrate dev
```

Setup Proxy

In the client/package.json update proxy

Start the app

Ensure you are in EchoApp folder

```bash
  yarn dev
```

Open your web browser and visit http://localhost:3000 to access Echo.

---

## Usage

1. Make sure you have completed the installation steps mentioned in the README.
2. Open your web browser.In the address bar, enter http://localhost:3000.
3. You will be presented with a list of uploaded audio files.
   Browse through the list and choose the audio file you want to play.While playing the audio, you will also have additional options:

- Pause: To pause the audio playback, click the pause button.
- Play: To resume playback after pausing, click the play button.
- Comment: If you want to add a comment to a specific timestamp in the audio, click the comment button. This will allow you to provide feedback, ask questions, or engage in discussions related to the audio content.

4. Sign Up for a account

- Click on the "Sign Up" link.
- Provide the required information, such as username and password, to create a new account.

5. Log in to your account:

- Click on the "Log In" link
- Enter your credentials (username and password) to log in to your account.

6. To upload a video for conversion in Echo, please follow these steps:

- Ensure that you are logged in to the Echo application with your credentials.
- Click on the user icon or profile icon to access your profile.
- From the profile page, locate and select the option to "Upload audio via video / YouTube link."
- Fill in all the necessary fields with the required information to convert the video to audio.
- Provide the video file or paste the YouTube link, depending on your chosen method.
- Complete any additional fields or settings required, such as specifying the desired output format or adjusting audio quality.
- Once you have filled in all the necessary details, initiate the upload process.
- The video will be converted to audio based on the provided settings, and the audio file will be generated.

7. To comment on an audio file in Echo, please follow these steps:

- Make sure you are logged in to the Echo application using your credentials.
- Locate and select the audio file on which you want to leave a comment.
- Once you have opened the audio file, you will find an option to add a comment.
- Write your comment in the provided comment box, and make sure to include the timestamp or time duration to specify the point you are referring to.
- After composing your comment, click on the "Post" or "Submit" button to publish your comment.

8. To navigate to a specific timestamp in Echo, follow these steps:

- Click on the timestamp to initiate navigation.
- The audio playback will automatically jump to the selected timestamp, allowing you to listen to the audio from that specific point.

9.

---

## Screenshots

#### Login Screen

![Login](https://github.com/Akshat2403/EchoApp/assets/95174507/44384c27-a067-4eed-93b6-64416a1a99a5)

#### SignUp Screen

![SignUp](https://github.com/Akshat2403/EchoApp/assets/95174507/486f5366-55bb-4cd5-b37a-4ee13fd90195)

#### Audio Player Screen

![Player](https://github.com/Akshat2403/EchoApp/assets/95174507/44913d92-604a-4eaf-86a2-1a2c0bdc4d67)

#### Upload Screen

![Upload](https://github.com/Akshat2403/EchoApp/assets/95174507/ad7bad52-cc49-4265-9b7a-01b3d61605cb)

#### Upload from Youtube Screen

![Uploadyoutube](https://github.com/Akshat2403/EchoApp/assets/95174507/4ab740b6-5290-442a-8b5f-c2514c6d38d9)
