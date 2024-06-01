import {useState} from "react";

const TermsAndConditions = () => {
    const [isChecked, setIsChecked] = useState(true)
    return (
        <div>
            <h1>Terms & Conditions</h1>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <div className="">
                <label htmlFor="terms-checkbox">
                    <input
                        type="checkbox"
                        id="terms-checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className=""
                    />
                    I accept the terms and conditions
                </label>
            </div>
            <button disabled={!isChecked} className="terms-btn">
                Submit
            </button>
        </div>
    );
};

export default TermsAndConditions;