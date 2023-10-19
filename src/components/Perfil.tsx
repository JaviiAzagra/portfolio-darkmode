export const MyProfile = () => {
  return (
    <a
      className={`profile fixed-profile`}
      href="https://franklin-dev.netlify.app"
      target="_blank"
    >
      <img src="../assets/logo.jpg" alt="" />
      <p>
        {" "}
        <span>Created by: </span>Javier Azagra
      </p>
    </a>
  );
};
