import Button from "./Button";

const UploadButton = () => {
  return (
    <>
      <Button onSmash={() => alert("Uploading a movie")}>Uploading</Button>
    </>
  );
};

export default UploadButton;
