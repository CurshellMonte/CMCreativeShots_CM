/* =========================================
   CM CREATIVESHOTS
   BOOKING SYSTEM
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

const photographerWhatsApp = "59995254792";


/* =========================================
   ELEMENTS
========================================= */

const bookingForm =
    document.getElementById("bookingForm");


const dateInput =
    document.getElementById("date");


const timeButtons =
    document.querySelectorAll("#timeOptions .choice-button");


const selectedTime =
    document.getElementById("selectedTime");


const otherTimeContainer =
    document.getElementById("otherTimeContainer");


const otherTimeInput =
    document.getElementById("otherTime");


const eventButtons =
    document.querySelectorAll("#eventOptions .choice-button");


const selectedEvent =
    document.getElementById("selectedEvent");


const otherEventContainer =
    document.getElementById("otherEventContainer");


const otherEventInput =
    document.getElementById("otherEvent");


const paymentButtons =
    document.querySelectorAll("#paymentOptions .choice-button");


const selectedPayment =
    document.getElementById("selectedPayment");


const plusButton =
    document.getElementById("plusButton");


const minusButton =
    document.getElementById("minusButton");


const peopleNumber =
    document.getElementById("peopleNumber");


const numberOfPeople =
    document.getElementById("numberOfPeople");


const menuButton =
    document.getElementById("menuButton");


const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.toggle("active");

    }
);


const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove("active");

            }
        );

    }
);


/* =========================================
   MINIMUM DATE = TODAY
========================================= */

const today = new Date();


const year =
    today.getFullYear();


const month =
    String(
        today.getMonth() + 1
    ).padStart(2, "0");


const day =
    String(
        today.getDate()
    ).padStart(2, "0");


dateInput.min =
    `${year}-${month}-${day}`;


/* =========================================
   TIME BUTTONS
========================================= */

timeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /* Remove previous selection */

                timeButtons.forEach(
                    function (item) {

                        item.classList.remove("selected");

                    }
                );


                /* Select current button */

                this.classList.add("selected");


                /* Save selected value */

                const value =
                    this.dataset.value;


                selectedTime.value =
                    value;


                /* OTHER TIME */

                if (value === "OTHER") {

                    otherTimeContainer.classList.remove(
                        "hidden-field"
                    );

                    otherTimeInput.required = true;

                    setTimeout(
                        function () {

                            otherTimeInput.focus();

                        },
                        100
                    );

                } else {

                    otherTimeContainer.classList.add(
                        "hidden-field"
                    );

                    otherTimeInput.required = false;

                    otherTimeInput.value = "";

                }

            }
        );

    }
);


/* =========================================
   EVENT BUTTONS
========================================= */

eventButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /* Remove previous selection */

                eventButtons.forEach(
                    function (item) {

                        item.classList.remove("selected");

                    }
                );


                /* Select current */

                this.classList.add("selected");


                /* Save selection */

                const value =
                    this.dataset.value;


                selectedEvent.value =
                    value;


                /* OTHER EVENT */

                if (value === "Other Event") {

                    otherEventContainer.classList.remove(
                        "hidden-field"
                    );

                    otherEventInput.required = true;

                    setTimeout(
                        function () {

                            otherEventInput.focus();

                        },
                        100
                    );

                } else {

                    otherEventContainer.classList.add(
                        "hidden-field"
                    );

                    otherEventInput.required = false;

                    otherEventInput.value = "";

                }

            }
        );

    }
);


/* =========================================
   PAYMENT BUTTONS
========================================= */

paymentButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                paymentButtons.forEach(
                    function (item) {

                        item.classList.remove("selected");

                    }
                );


                this.classList.add("selected");


                selectedPayment.value =
                    this.dataset.value;

            }
        );

    }
);


/* =========================================
   NUMBER OF PEOPLE
========================================= */

let people = 1;


plusButton.addEventListener(
    "click",
    function () {

        if (people < 100) {

            people++;

            updatePeople();

        }

    }
);


minusButton.addEventListener(
    "click",
    function () {

        if (people > 1) {

            people--;

            updatePeople();

        }

    }
);


function updatePeople() {

    peopleNumber.textContent =
        people;

    numberOfPeople.value =
        people;

}


/* =========================================
   FORMAT DATE
========================================= */

function formatDate(dateValue) {

    const date =
        new Date(
            dateValue + "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

}


/* =========================================
   SUBMIT BOOKING
========================================= */

bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* =================================
           REQUIRED NORMAL FIELDS
        ================================== */

        const fullName =
            document
                .getElementById("fullName")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const date =
            dateInput.value;


        const location =
            document
                .getElementById("location")
                .value
                .trim();


        const extraMessage =
            document
                .getElementById("extraMessage")
                .value
                .trim();


        /* =================================
           REQUIRED CHOICES
        ================================== */

        const chosenTime =
            selectedTime.value;


        const chosenEvent =
            selectedEvent.value;


        const chosenPayment =
            selectedPayment.value;


        /* =================================
           CHECK NAME
        ================================== */

        if (!fullName) {

            alert(
                "Please enter your first and last name."
            );

            document
                .getElementById("fullName")
                .focus();

            return;

        }


        /* =================================
           CHECK PHONE
        ================================== */

        if (!phone) {

            alert(
                "Please enter your phone number."
            );

            document
                .getElementById("phone")
                .focus();

            return;

        }


        /* =================================
           CHECK DATE
        ================================== */

        if (!date) {

            alert(
                "Please select a date."
            );

            dateInput.focus();

            return;

        }


        /* =================================
           CHECK TIME
        ================================== */

        if (!chosenTime) {

            alert(
                "Please select a time."
            );

            return;

        }


        /* =================================
           FINAL TIME
        ================================== */

        let finalTime =
            chosenTime;


        if (chosenTime === "OTHER") {

            finalTime =
                otherTimeInput
                    .value
                    .trim();


            if (!finalTime) {

                alert(
                    "Please enter your preferred time."
                );

                otherTimeInput.focus();

                return;

            }

        }


        /* =================================
           CHECK LOCATION
        ================================== */

        if (!location) {

            alert(
                "Please enter the location."
            );

            document
                .getElementById("location")
                .focus();

            return;

        }


        /* =================================
           CHECK EVENT
        ================================== */

        if (!chosenEvent) {

            alert(
                "Please select the type of session."
            );

            return;

        }


        /* =================================
           FINAL EVENT
        ================================== */

        let finalEvent =
            chosenEvent;


        if (chosenEvent === "Other Event") {

            finalEvent =
                otherEventInput
                    .value
                    .trim();


            if (!finalEvent) {

                alert(
                    "Please tell me what other event you need."
                );

                otherEventInput.focus();

                return;

            }

        }


        /* =================================
           CHECK PAYMENT
        ================================== */

        if (!chosenPayment) {

            alert(
                "Please select a payment method."
            );

            return;

        }


        /* =================================
           CHECK FORM
        ================================== */

        if (!bookingForm.checkValidity()) {

            bookingForm.reportValidity();

            return;

        }


        /* =================================
           READABLE DATE
        ================================== */

        const readableDate =
            formatDate(date);


        /* =================================
           EXTRA MESSAGE
        ================================== */

        let extraText =
            "No additional message.";


        if (extraMessage) {

            extraText =
                extraMessage;

        }


        /* =================================
           WHATSAPP MESSAGE
        ================================== */

        const message =

`📸 CM CREATIVESHOTS — NEW BOOKING REQUEST

━━━━━━━━━━━━━━━━━━━━

CLIENT INFORMATION

Name:
${fullName}

Phone Number:
${phone}

━━━━━━━━━━━━━━━━━━━━

BOOKING DETAILS

Date:
${readableDate}

Time:
${finalTime}

Location:
${location}

Type of Session:
${finalEvent}

Number of People:
${people}

Payment Method:
${chosenPayment}

━━━━━━━━━━━━━━━━━━━━

ADDITIONAL INFORMATION

${extraText}

━━━━━━━━━━━━━━━━━━━━

Please contact the client to confirm availability and provide the next booking instructions.

CM CreativeShots
Photography`;


        /* =================================
           CREATE WHATSAPP LINK
        ================================== */

        const whatsappURL =
            `https://wa.me/${photographerWhatsApp}?text=${encodeURIComponent(message)}`;


        /* =================================
           OPEN WHATSAPP
        ================================== */

        window.open(
            whatsappURL,
            "_blank"
        );

    }
);