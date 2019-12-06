const express = require('express')
const nodemailer = require('nodemailer')
const Email = require('../models/Email')

const router = express.Router();

router.post('/', (req, res, next) => {
    console.log(req.body.email)
    let receiptant = req.body.email
    const email = new Email({
        email: receiptant
    })

      var transporter = nodemailer.createTransport({
          service: 'hotmail',
          auth: {
            user: "Hello@e3iq.com",
            pass: 'Act2020!!'
          }
      });

      var mailOptions = {
        from: 'Hello@e3iq.com',
        to: email,
        subject: 'Welcome to E3IQ newsletter!',
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
           <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
           <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <style type="text/css">
          body {margin: 0; padding: 0; min-width: 100%!important;}
          img {height: auto;}
          .content {width: 100%; max-width: 600px;}
          .header {padding: 40px 30px 20px 30px;}
          .innerpadding {padding: 24px 30px 30px 30px;}
          .borderbottom {border-bottom: 1px solid #f2eeed;}
          .subhead {font-size: 15px; color: #ffffff; font-family: sans-serif; letter-spacing: 10px;}
          .h1, .h2, .bodycopy {color: #153643; font-family: sans-serif;}
          .h1 {font-size: 33px; line-height: 38px; font-weight: bold;}
          .h2 {padding: 0 0 15px 0; font-size: 24px; line-height: 28px; font-weight: bold;}
          .bodycopy {font-size: 16px; line-height: 22px;}
          .button {text-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold; padding: 0 30px 0 30px;}
          .button a {color: #ffffff; text-decoration: none;}
          .footer {padding: 20px 30px 15px 30px;}
          .footercopy {font-family: sans-serif; font-size: 14px; color: #ffffff;}
          .footercopy a {color: #ffffff; text-decoration: underline;}
        
          @media only screen and (max-width: 550px), screen and (max-device-width: 550px) {
          body[yahoo] .hide {display: none!important;}
          body[yahoo] .buttonwrapper {background-color: transparent!important;}
          body[yahoo] .button {padding: 0px!important;}
          body[yahoo] .button a {background-color: #e05443; padding: 15px 15px 13px!important;}
          body[yahoo] .unsubscribe {display: block; margin-top: 20px; padding: 10px 50px; background: #2f3942; border-radius: 5px; text-decoration: none!important; font-weight: bold;}
          }
        
          /*@media only screen and (min-device-width: 601px) {
            .content {width: 600px !important;}
            .col425 {width: 425px!important;}
            .col380 {width: 380px!important;}
            }*/
        
          </style>
        </head>
        
        <body yahoo bgcolor="#f6f8f1">
        <table width="100%" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td>
        
            <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">
            <tr>
            </tr>
              <tr>
                <td class="innerpadding borderbottom" style="border: none !important;">
                    <img src="https://activateasers.s3.us-east-2.amazonaws.com/e3iq_img.png" style="height: 80px"  />
                </td>
              <tr>
                <td class="innerpadding bodycopy">
                    <h4>Hey there, </h4>
                     <p align="justify">We would like to extend a warm welcome and &#34;<b>Thank you</b>&#34; for subscribing to E3IQ.</p>
                     <p>Stay tuned for interesting updates from E3IQ on Extended Reality(XR). </p>
                     <p>For more information, Please feel free to give us a shout at <a href="mailto:hello@e3iq.com" target="_top">hello@e3iq.com</a> </p>
                     <b>Team E3IQ</b>
                </td>
              </tr>
              <tr>
                <td class="footer" style="background: linear-gradient(90deg, rgba(255,46,89,1) 17%, rgba(159,0,255,1) 61%)" >
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="padding: 6px 0 12px 0; margin-bottom: 5px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="37" style="text-align: center; padding: 0 10px 0 10px;">
                                 <a href="https://www.facebook.com/E3IQXR">
                                    <img src="https://img.icons8.com/doodle/48/000000/facebook-circled.png" style="color: #fff" /> 
                                 </a>
                              </td>
                              <td width="37" style="text-align: center; padding: 0 10px 0 10px;">
                                  <a href="https://www.instagram.com/e3iqxr/">
                                     <img src="https://img.icons8.com/office/16/000000/instagram-new.png">
                                  </a>      
                              </td>
                              <td width="37" style="text-align: center; padding: 0 10px 0 10px;">
                                  <a href="https://twitter.com/E3IQXR">
                                     <img src="https://img.icons8.com/color/48/000000/twitter-circled.png">
                                  </a>
                              </td>
                              <td width="37" style="text-align: center; padding: 0 10px 0 10px;">
                                  <a href="https://www.linkedin.com/company/e3iqxr">
                                     <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png">
                                  </a>
                              </td>
                            </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                        <td align="center" class="footercopy">
                            &copy; 2019  E3IQ, Inc &middot; Palo Alto, CA 94301
                              <br/>
                          <a href="#" class="unsubscribe"><font color="#ffffff">Unsubscribe</font></a> 
                          <span class="hide">from this newsletter instantly</span>
                        </td>
                      </tr>
                  </table>
                </td>
              </tr>
            </table>
            </td>
          </tr>
        </table>
        </body>
        </html>
        `     
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.json({ msg : 'Invalid email' })
        } else {
          console.log('Email sent: ' + info.response);
            res.json({ msg: 'Thank you for reaching us' })
        }
    })

})

module.exports = router;