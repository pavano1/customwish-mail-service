import nodemailer from "nodemailer";

export const orderConfirmation = async (data, callback) => {
  const maillist = ["kiran.s@thecustomwish.com", "contact@thecustomwish.com"];

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: "kiran.s@thecustomwish.com",
        // pass: "otkw ssnv ljzo sekw",

        user: "contact@thecustomwish.com",
        pass: "ehxf zwoh oqwz ruby",
        // user: "nodemailerapril5@gmail.com",
        // pass: "hdkd nazw navu icdz",
      },
    });

    await transporter.sendMail({
      from: "contact@thecustomwish.com",
      to: data?.email,
      subject: `CustomWish Confirm Order-Email:${data?.email}`,
      html: `
      
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&amp;display=swap" rel="stylesheet" />
  </head>
  <body style="margin: 0; font-family: 'Poppins', sans-serif; background: #ffffff; font-size: 14px;">
    <div style="max-width: 680px; margin: 0 auto; padding: 45px 30px 60px; background: #f9a974; background-image: url(https://thecustomwish.com/public/uploads/images/3.jpg); background-repeat: repeat; background-size: 800px 452px; background-position: top center; font-size: 14px; color: #4342D9;">
      <header>
        <div style="margin: 0; margin-top: 16px; text-align: center;">
          <a href="http://www.facebook.com/thecustomwish" target="_blank" style="display: inline-block;" title="facebook">
            <img width="32" height="32" alt="Facebook" src="https://thecustomwish.com/public/img/facebook.png" />
          </a>
          <a href="http://www.instagram.com/customwish" target="_blank" style="display: inline-block; margin-left: 8px;" title="instagram">
            <img width="32" height="32" alt="Instagram" src="https://thecustomwish.com/public/img/instagram.png" />
          </a>
        </div>
      </header>

      <main>
        <div style="margin: 0; margin-top: 30px; padding: 50px 30px 115px; background: #ffffff; border-radius: 30px; text-align: center;">
          <table style="width: 100%;">
            <tbody>
              <tr style="height: 0; text-align: center;">
                <td><a href="https://thecustomwish.com/">
                  <img alt="Logo" src="https://thecustomwish.com/public/uploads/images/unnamed2.png" height="100px" />
                </a></td>
              </tr>
            </tbody>
          </table>

          <div style="width: 100%; max-width: 489px; margin: 0 auto; padding-top: 60px;">
            
            <!-- Replaced gradient text with solid color -->
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #2a2462;font-family: Arial, sans-serif;">
              Welcome To CustomWish
            </h1>

            <p style="margin: 0; margin-top: 17px; font-size: 18px; font-weight: 600; color: #c0352f;">
              Hey ${data?.name},
            </p>
            <p style="margin: 0; margin-top: 17px; font-weight: 600; letter-spacing: 0.56px; color: #2a2462;">
              Hurray!
            </p>
            <p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px; color: #2a2462;font-size: 16px;">
              Your order is successfully placed. Now enjoy a cup of tea, just sit back and relax while we take care of the rest.
            </p>
             <p style="margin: 0; margin-top: 17px; font-size: 16px; font-weight: 700; color: #002a5c;"><strong>Order Information:</strong></p>
            <!-- Used a gradient background with white text instead of gradient text -->
            <p><a href="https://thecustomwish.com/mail/${data?.generateorderid}">Click here for invoice and Product details</a></p>
          </div>
        </div>

        <p style="max-width: 400px; margin: 0 auto; margin-top: 40px; text-align: center; font-weight: 500; color: #ffffff;">
          Need help? Ask at
          <a href="mailto:contact@thecustomwish.com" style="color: #499fb6; text-decoration: none; text-align: center;">
            contact@thecustomwish.com
          </a>
        </p>
      </main>

      <footer style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #ffffff;">
        <p style="margin: 0; margin-top: 15px; font-size: 16px; font-weight: 600; color: #ffffff; text-align: center;">
          CustomWish
        </p>
        <p style="margin: 0; margin-top: 8px; color: #ffffff; text-align: center;">
  Ashirwad No.U-11, 1st cross, Pipeline, Malleshwaram, Bangalore-560003
</p>

        <p style="margin: 0; margin-top: 16px; color: #ffffff; text-align: center;">
          Copyright © <span style="color: #ce1219;">2025</span> Company. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>
      
      
    
    `,
    });

    await transporter.sendMail({
      from: "contact@thecustomwish.com",
      to: maillist,
      subject: `CustomWish Confirm Order-Email:${data?.email}`,
      html: `
      
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&amp;display=swap" rel="stylesheet" />
  </head>
  <body style="margin: 0; font-family: 'Poppins', sans-serif; background: #ffffff; font-size: 14px;">
    <div style="max-width: 680px; margin: 0 auto; padding: 45px 30px 60px; background: #f9a974; background-image: url(https://thecustomwish.com/public/uploads/images/3.jpg); background-repeat: repeat; background-size: 800px 452px; background-position: top center; font-size: 14px; color: #4342D9;">
      <header>
        <div style="margin: 0; margin-top: 16px; text-align: center;">
          <a href="http://www.facebook.com/thecustomwish" target="_blank" style="display: inline-block;" title="facebook">
            <img width="32" height="32" alt="Facebook" src="https://thecustomwish.com/public/img/facebook.png" />
          </a>
          <a href="http://www.instagram.com/customwish" target="_blank" style="display: inline-block; margin-left: 8px;" title="instagram">
            <img width="32" height="32" alt="Instagram" src="https://thecustomwish.com/public/img/instagram.png" />
          </a>
        </div>
      </header>

      <main>
        <div style="margin: 0; margin-top: 30px; padding: 50px 30px 115px; background: #ffffff; border-radius: 30px; text-align: center;">
          <table style="width: 100%;">
            <tbody>
              <tr style="height: 0; text-align: center;">
                <td><a href="https://thecustomwish.com/">
                  <img alt="Logo" src="https://thecustomwish.com/public/uploads/images/unnamed2.png" height="100px" />
                </a></td>
              </tr>
            </tbody>
          </table>

          <div style="width: 100%; max-width: 489px; margin: 0 auto; padding-top: 60px;">
            
            <!-- Replaced gradient text with solid color -->
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #2a2462;font-family: Arial, sans-serif;">
              Welcome To CustomWish
            </h1>

            <p style="margin: 0; margin-top: 17px; font-size: 16px; font-weight: 600; color: #c0352f;">
              Hey ${data?.name},
            </p>
             <p>The customer has received the below order details :</p>
             <p style="margin: 0; margin-top: 17px; font-weight: 600; letter-spacing: 0.56px; color: #2a2462;">
              Hurray!
            </p>
            <p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px; color: #2a2462;">
              Your order is successfully placed. Now enjoy a cup of tea, just sit back and relax while we take care of the rest.
            </p>
             <p style="margin: 0; margin-top: 17px; font-size: 16px; font-weight: 700; color: #002a5c;"><strong>Order Information:</strong></p>
            <!-- Used a gradient background with white text instead of gradient text -->
            <p><a href="https://thecustomwish.com/mail/${data?.generateorderid}">Click here for invoice and Product details</a></p>
          </div>
        </div>

        <p style="max-width: 400px; margin: 0 auto; margin-top: 40px; text-align: center; font-weight: 500; color: #ffffff;">
          Need help? Ask at
          <a href="mailto:contact@thecustomwish.com" style="color: #499fb6; text-decoration: none; text-align: center;">
            contact@thecustomwish.com
          </a>
        </p>
      </main>

      <footer style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #ffffff;">
        <p style="margin: 0; margin-top: 35px; font-size: 16px; font-weight: 600; color: #ffffff; text-align: center;">
          CustomWish
        </p>
        <p style="margin: 0; margin-top: 8px; color: #ffffff; text-align: center;">
  Ashirwad No.U-11, 1st cross, Pipeline, Malleshwaram, Bangalore-560003
</p>

        <p style="margin: 0; margin-top: 16px; color:#ffffff; text-align: center;">
          Copyright © <span style="color: #ce1219;">2026</span> Company. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>



    
    
    `,
    });

    return callback(null, `mail sent to ${data?.email}`);
  } catch (err) {
    return callback(err);
  }
};
