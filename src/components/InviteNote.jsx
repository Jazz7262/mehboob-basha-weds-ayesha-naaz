import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. Raichur Rafeeq Ahmed,</h2>

                <h5 className="address mb-3">
                    Proprietor: R.R. Jewellers,
                    <br /> Shroff Bazar, Adoni.
                </h5>
                <h5 className="address mb-3">
                    H.No.: 3/206, Gokar Jhanda,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 99594 68993, <br />
                    +91 81859 41936, <br />
                    +91 99125 67012.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
