const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };

  return (
    <div className="footer" style={footerStyle}>
      <br />
      <em>Note app, created during FOS course.</em>
    </div>
  );
};

export default Footer;
