import nodemailer from "nodemailer";

export const corporateEnquiry = async (data, callback) => {
  const maillist = [
    "corporategifts@thecustomwish.com",
    "kiran.s@thecustomwish.com",
  ];

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "corporategifts@thecustomwish.com",
        pass: "uvhy pqzo qspp yjjc",

        // user: "nodemailerapril5@gmail.com",
        // pass: "hdkd nazw navu icdz",
      },
    });

    await transporter.sendMail({
      from: "corporategifts@thecustomwish.com",
      to: data?.email,
      subject: `CustomWish Corporate Equiry-Email:${data?.email}`,
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
            <img width="36px" alt="Facebook" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook" />
          </a>
          <a href="http://www.instagram.com/customwish" target="_blank" style="display: inline-block; margin-left: 8px;" title="instagram">
            <img width="36px" alt="Instagram" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram" />
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
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #2a2462;">
              Welcome To CustomWish Corporate Gifts!
            </h1>

            <p style="margin: 0; margin-top: 17px; font-size: 16px; font-weight: 500; color: #c0352f;">
              Hello ${data?.name},
            </p>

            <p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px; color: #2a2462;">
              Looking for the right product for your occasion? We are here to help and answer any questions that you might have. We look forward to hearing from you.
            </p>

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

        <p style="margin: 0; margin-top: 16px; color: #ffffff; text-align: center;">
          Copyright © <span style="color: #ce1219;">2026</span> Company. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>


    
    `,
    });

    await transporter.sendMail({
      from: "corporategifts@thecustomwish.com",
      to: maillist,
      subject: `CustomWish Corporate Equiry-Email:${data?.email}`,
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
            <img width="36px" alt="Facebook" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook" />
          </a>
          <a href="http://www.instagram.com/customwish" target="_blank" style="display: inline-block; margin-left: 8px;" title="instagram">
            <img width="36px" alt="Instagram" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram" />
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
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #2a2462;font-family: 'Roboto', Arial, sans-serif;">
              CustomWish Corporate Enquiry
            </h1>


            <p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px; color: #2a2462;"> </p>
           
              <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <tr>
    <td align="center">
      <table cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #002a5c; color: #ffffff; font-size: 24px; font-weight: bold;">
            Corporate Enquiry Details
          </td>
        </tr>
        <tr>
          <td style="padding: 30px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 16px; color: #333;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 120px;">Product Name</td>
                <td style="padding: 10px 0; width: 10px;">:</td>
                <td style="padding: 10px 0;">${data?.corp_name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Name</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.name}</td>
              </tr>
                <tr>
                <td style="padding: 10px 0; font-weight: bold;">Email</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.email}</td>
              </tr>
               <tr>
                <td style="padding: 10px 0; font-weight: bold;">Phone Number</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.phone}</td>
              </tr>
               <tr>
                <td style="padding: 10px 0; font-weight: bold;">Company</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.company}</td>
              </tr>
<tr>
                <td style="padding: 10px 0; font-weight: bold;">Location</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.location}</td>
              </tr>
<tr>
                <td style="padding: 10px 0; font-weight: bold;">Company Address</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.companyaddress}</td>
              </tr>
<tr>
                <td style="padding: 10px 0; font-weight: bold;">GST</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.gst}</td>
              </tr>
<tr>
                <td style="padding: 10px 0; font-weight: bold;">Quantity</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.quantity}</td>
              </tr>
<tr>
                <td style="padding: 10px 0; font-weight: bold;">Message</td>
                <td style="padding: 10px 0;">:</td>
                <td style="padding: 10px 0;">${data?.message}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="text-align: center; padding: 20px; background-color: #f0f0f0; color: #888; font-size: 14px;">
            Thank you for connecting with us.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
          </div>
        </div>

        <p style="max-width: 400px; margin: 0 auto; margin-top: 25px; text-align: center; font-weight: 500; color: #ffffff;">
          Need help? Ask at
          <a href="mailto:contact@thecustomwish.com" style="color: #499fb6; text-decoration: none; text-align: center;">
            contact@thecustomwish.com
          </a>
        </p>
      </main>

      <footer style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #ffffff;">
        <p style="margin: 0; margin-top: 40px; font-size: 16px; font-weight: 600; color: #ffffff; text-align: center;">
          CustomWish
        </p>
        <p style="margin: 0; margin-top: 8px; color: #ffffff; text-align: center;">
  Ashirwad No.U-11, 1st cross, Pipeline, Malleshwaram, Bangalore-560003
</p>

        <p style="margin: 0; margin-top: 16px; color: #ffffff; text-align: center;">
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
