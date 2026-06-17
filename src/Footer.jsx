        import React from "react";
        import './Footer.css'; // Import the CSS file for styling

        function Footer(props) {
        return (
            <footer className="main-footer">
            <p> {props.year} {props.company}</p>
            </footer>
        );
        }
export default Footer;