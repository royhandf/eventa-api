const nodemailer = require("nodemailer");
const { gmail, password } = require("../../config");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: gmail,
    pass: password,
  },
});

const otpMail = async (email, data) => {
  try {
    let message = {
      from: gmail,
      to: email,
      subject: "Otp for registration is: ",
      html: `
          <div
            style="
              font-family: Helvetica, Arial, sans-serif;
              min-width: 1000px;
              overflow: auto;
              line-height: 2;
            "
          >
            <div style="margin: 50px auto; width: 70%; padding: 20px 0">
              <div style="border-bottom: 1px solid #eee">
                <a
                  href=""
                  style="
                    font-size: 1.4em;
                    color: #00466a;
                    text-decoration: none;
                    font-weight: 600;
                  "
                  >Semina</a
                >
              </div>
              <p style="font-size: 1.1em">Hi,</p>
              <p>
                Thank you for choosing Your Brand. Use the following OTP to complete
                your Sign Up procedures.
              </p>
              <h2
                style="
                  background: #00466a;
                  margin: 0 auto;
                  width: max-content;
                  padding: 0 10px;
                  color: #fff;
                  border-radius: 4px;
                "
              >
                ${data.otp}
              </h2>
              <p style="font-size: 0.9em">Regards,<br />Your Brand</p>
              <hr style="border: none; border-top: 1px solid #eee" />
              <div
                style="
                  float: right;
                  padding: 8px 0;
                  color: #aaa;
                  font-size: 0.8em;
                  line-height: 1;
                  font-weight: 300;
                "
              >
                <p>Your Brand Inc</p>
                <p>312312 BWA</p>
                <p>Angga</p>
              </div>
            </div>
          </div>`,
    };

    return await transporter.sendMail(message);
  } catch (ex) {
    console.log(ex);
  }
};

const invoiceMail = async (email, data) => {
  try {
    let message = {
      from: gmail,
      to: email,
      subject: "Invoice payment Event",
      html: `<div style="padding: 30px; position: relative">
        <div class="toolbar hidden-print">
          <hr />
        </div>
        <div
          class="overflow-auto"
          style="
            position: relative;
            background-color: #fff;
            min-height: 680px;
            padding: 15px;
          "
        >
          <div style="min-width: 600px">
            <header
              style="
                padding: 10px 0;
                margin-bottom: 20px;
                border-bottom: 1px solid #3989c6;
              "
            >
              <div class="row">
                <div class="col" style="text-align: left">
                  <h2 style="margin-top: 0; margin-bottom: 0">Event</h2>
                  <div>Malang, Indonesia</div>
                  <div>(222) 999-111</div>
                  <div>royhandf@gmail.com</div>
                </div>
              </div>
            </header>
            <main style="padding-bottom: 25px">
              <div class="row" style="margin-bottom: 20px">
                <div class="col" style="text-align: left">
                  <div class="text-gray-light">INVOICE TO:</div>
                  <h2 class="to" style="margin-top: 0; margin-bottom: 0">
                    ${data.personalDetail.firstName} ${data.personalDetail.lastName}
                  </h2>
                </div>
                <div class="col">
                  <h1 style="margin-top: 0; color: rgb(168, 165, 165)">Invoice</h1>
                  <div class="date">${data.id}</div>
                  <div class="date">${data.date}</div>
                </div>
              </div>
              <table
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="
                  width: 50%;
                  border-collapse: collapse;
                  border-spacing: 0;
                  margin-bottom: 20px;
                "
              >
                <tr>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      white-space: nowrap;
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    Event Name
                  </th>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      white-space: nowrap;
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    ${data.historyEvent.title}
                  </th>
                </tr>
                <tr>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      white-space: nowrap;
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    Event Description
                  </th>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    ${data.historyEvent.about}
                  </th>
                </tr>
                <tr>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      white-space: nowrap;
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    Event Location
                  </th>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      white-space: nowrap;
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    ${data.historyEvent.venueName}
                  </th>
                </tr>
                <tr>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      white-space: nowrap;
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    Total Payments
                  </th>
                  <th
                    style="
                      padding: 15px;
                      background: #eee;
                      border-bottom: 1px solid rgb(168, 165, 165);
                      white-space: nowrap;
                      font-size: 16px;
                      font-weight: 400;
                    "
                  >
                    ${data.totalPay}
                  </th>
                </tr>
              </table>
              <div style="margin-top: -100px; font-size: 2em; margin-bottom: 50px">
                Thank you!
              </div>
            </main>
            <footer
              style="
                width: 100%;
                text-align: center;
                color: #777;
                border-top: 1px solid #aaa;
                padding: 8px 0;
              "
            >
              Invoice was created on a computer and is valid without the signature
              and seal.
            </footer>
          </div>
          <div></div>
        </div>
      </div>`,
    };

    return await transporter.sendMail(message);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { otpMail, invoiceMail };
