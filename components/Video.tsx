import Container from "./ui/Container";

const Video = () => {
  return (
    <div className="py-20">
      <Container>
        <video width="100%" controls>
          <source src="/video/CUTICLE OIL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    </div>
  );
};

export default Video;