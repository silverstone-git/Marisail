import PropTypes from 'prop-types';

const SubmitButton = ({ text="Submit", onClick, style={}, className="", name="submit" }) => {
    return (
        <div className="d-flex justify-content-center p-4 pt-5">
            <button
                type="submit"
                className={`btn btn-success p-3 ${className}`}
                style={{
                    backgroundColor: "#971e28",
                    color: "#fff",
                    padding: "8px 32px",
                    border: "0px none",
                    borderRadius: 30,
                    textTransform: "uppercase",
                    marginBottom: 8,
                    width: "50%",
                    cursor: "pointer",
                    transition: "all .5s ease",
                    ...style
                }}
                onClick={onClick}
                name={`${name}`}
                id={`${name}`}
            >
                {text}
            </button>
        </div>
    );
};

SubmitButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
    name: PropTypes.string,
};
export default SubmitButton;