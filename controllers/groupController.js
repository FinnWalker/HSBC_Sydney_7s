const groupModel = require("../models/groupModel");
const individualModel = require("../models/individualModel");

const nodemailer = require("nodemailer");
const formidable = require("formidable");

const sanitize = require("mongo-sanitize");

async function main(path, email) {
  console.log("trying");
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "hsbcsydney7@gmail.com", // generated ethereal user
      pass: "S95Qc6hWRBnY" // generated ethereal password
    }
  });

  let message = {
    from: "finn@catalystvr.com.au",

    // Comma separated list of recipients
    to: email,

    // Subject of the message
    subject: "HSBC SYDNEY 7S TEST",

    // HTML body
    html:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" > <head>  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" /> <meta content="width=device-width" name="viewport" />  <meta content="IE=edge" http-equiv="X-UA-Compatible" />  <title></title>  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />  <style type="text/css"> body { margin: 0; padding: 0; } table, td, tr { vertical-align: top; border-collapse: collapse; } * { line-height: inherit; } a[x-apple-data-detectors="true"] { color: inherit !important; text-decoration: none !important; } </style> <style id="media-query" type="text/css"> @media (max-width: 670px) { .block-grid, .col { min-width: 320px !important; max-width: 100% !important; display: block !important; } .block-grid { width: 100% !important; } .col { width: 100% !important; } .col > div { margin: 0 auto; } img.fullwidth, img.fullwidthOnMobile { max-width: 100% !important; } .no-stack .col { min-width: 0 !important; display: table-cell !important; } .no-stack.two-up .col { width: 50% !important; } .no-stack .col.num4 { width: 33% !important; } .no-stack .col.num8 { width: 66% !important; } .no-stack .col.num4 { width: 33% !important; } .no-stack .col.num3 { width: 25% !important; } .no-stack .col.num6 { width: 50% !important; } .no-stack .col.num9 { width: 75% !important; } .video-block { max-width: none !important; } .mobile_hide { min-height: 0px; max-height: 0px; max-width: 0px; display: none; overflow: hidden; font-size: 0px; } .desktop_hide { display: block !important; max-height: none !important; } } </style> </head> <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;" >  <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%" > <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top;" valign="top">  <div style="background-color:transparent;"> <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;" > <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;" >   <div class="col num12" style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;" > <div style="width:100% !important;">  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;" >  <div align="center" class="img-container center fixedwidth" style="padding-right: 35px;padding-left: 35px;" >  <div style="font-size:1px;line-height:35px"></div> <img align="center" alt="I\'m an image" border="0" class="center fixedwidth" src="https://seikoarpittstmall.com.au/chooseyourmoment/img/seiko.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 325px; display: block;" title="I\'m an image" width="325" /> <div style="font-size:1px;line-height:5px"></div>  </div>  </div>  </div> </div>   </div> </div> </div> <div style="background-color:#FFFFFF;"> <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;" > <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;" >   <div class="col num12" style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;" > <div style="width:100% !important;">  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;" >   <div style="color:#555555;font-family:\'Lato\', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:30px;padding-bottom:30px;padding-left:30px;" > <div style="font-family: \'Lato\', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; line-height: 1.2; color: #555555; mso-line-height-alt: 14px;" > <p style="font-size: 22px; line-height: 1.2; text-align: center; mso-line-height-alt: 26px; margin: 0;" > <span style="font-size: 22px;" ><strong ><span style="font-size: 22px;" >Thank you for visiting our Seiko Prospex Pop Up Store</span ></strong ></span > </p> </div> </div>  <div align="center" class="img-container center fullwidthOnMobile fixedwidth" style="padding-right: 0px;padding-left: 0px;" > <img align="center" alt="Image" border="0" class="center fullwidthOnMobile fixedwidth" src="https://seikoarpittstmall.com.au/chooseyourmoment/img/chance.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: nullpx; display: block;" title="Image" />  </div> <div align="center" class="button-container" style="padding-top:25px;padding-right:10px;padding-bottom:15px;padding-left:10px;" > <a href="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/474116_454391/Seiko%20-%20Pop%20Up%20Store%20-%20T%26C%27s_1.pdf" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #0068A5; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #0068A5; border-right: 1px solid #0068A5; border-bottom: 1px solid #0068A5; border-left: 1px solid #0068A5; padding-top: 5px; padding-bottom: 5px; font-family: \'Lato\', Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank" ><span style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;" > <span style="font-size: 16px; line-height: 2; mso-line-height-alt: 32px;" ><span style="font-size: 14px; line-height: 28px;" >Terms & Conditions</span ></span > </span></a >  </div> <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%" > <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top" > <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #FFF300; height: 0px; width: 100%;" valign="top" width="100%" > <tbody> <tr style="vertical-align: top;" valign="top" > <td height="0" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" > <span></span> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table>  <div align="center" class="video-block" style="max-width:nullpx;min-width:NaNpx;padding-top:undefined;padding-bottom:undefined;padding-left:undefined;padding-right:undefined;" > <a class="video-preview" href="" style="background-color:#5b5f66;background-image:radial-gradient(circle at center, #5b5f66, #1d1f21);display:block;text-decoration:none;" target="_blank" > <div> <table background="https://seikoarpittstmall.com.au/chooseyourmoment/img/video-placeholder.svg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url(https://seikoarpittstmall.com.au/chooseyourmoment/img/video-placeholder.svg); background-size: cover; min-height: NaNpx; min-width: NaNpx;" valign="top" width="100%" > <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top;" valign="top" width="25%" > <img alt="" border="0" src="cid:picture" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: none; height: auto; opacity: 1; display: block;" width="100%" /> </tr> </table> </div> </a>  </div>   </div>  </div> </div>   </div> </div> </div> <div style="background-image:url(\'https://seikoarpittstmall.com.au/chooseyourmoment/img/confetti.png\');background-position:top left;background-repeat:no-repeat;background-color:#FFFFFF;" > <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;" > <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;" >   <div class="col num12" style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;" > <div style="width:100% !important;">  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;" >  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%" > <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top" > <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #FFF300; height: 0px; width: 100%;" valign="top" width="100%" > <tbody> <tr style="vertical-align: top;" valign="top" > <td height="0" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" > <span></span> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table>  </div>  </div> </div>   </div> </div> </div> <div style="background-color:#FFFFFF;"> <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;" > <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;" >   <div class="col num12" style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;" > <div style="background-color:#FFFFFF;width:100% !important;" >  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;" >  <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;" > <a href="https://www.seiko.com.au/" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #FFFFFF; background-color: #0068A5; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #0068A5; border-right: 1px solid #0068A5; border-bottom: 1px solid #0068A5; border-left: 1px solid #0068A5; padding-top: 5px; padding-bottom: 5px; font-family: \'Lato\', Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank" ><span style="padding-left:20px;padding-right:20px;font-size:17px;display:inline-block;" > <span style="font-size: 16px; line-height: 2; mso-line-height-alt: 32px;" ><span style="font-size: 17px; line-height: 34px;" >View the entire Seiko range</span ></span > </span></a >  </div>  </div>  </div> </div>   </div> </div> </div> <div style="background-color:transparent;"> <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;" > <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;" >   <div class="col num12" style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;" > <div style="width:100% !important;">  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;" >  <div align="center" class="img-container center autowidth fullwidth" style="padding-right: 0px;padding-left: 0px;" > <img align="center" alt="Image" border="0" class="center autowidth fullwidth" src="https://seikoarpittstmall.com.au/chooseyourmoment/img/topboard.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 650px; display: block;" title="Image" width="650" />  </div>  </div>  </div> </div>   </div> </div> </div>  </td> </tr> </tbody> </table>  </body> </html>',

    // An array of attachments
    attachments: [
      // Binary Buffer attachment

      {
        filename: "picture.jpg",
        //filename: "topboard.jpg",
        path: path,
        //path: pathModule.join(__dirname, "topboard.jpg"),

        cid: "picture" // should be as unique as possible
      }
    ]
  };
  let info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = {
  getParticular: function(req, res) {
    const returnGroup = function(count, individuals) {
      if (count == 7) {
        res.status(200).json({ individuals });
      }
    };
    const group_name = sanitize(req.body.group_name);
    if (group_name) {
      groupModel.findOne({ name: group_name }, function(err, group) {
        if (err) {
          res.status(500).json({ message: "Error finding group" });
        } else if (group) {
          let count = 0;
          let individuals = [];
          if (group.individual_0) {
            individualModel.findOne(
              { _id: group.individual_0 },
              (err, individual) => {
                if (individual) {
                  individuals.push(
                    individual.first_name + " " + individual.last_name
                  );
                }
                count += 1;
                returnGroup(count, individuals);
              }
            );
          } else {
            count += 1;
            returnGroup(count, individuals);
          }
          if (group.individual_1) {
            individualModel.findOne(
              { _id: group.individual_1 },
              (err, individual) => {
                if (individual) {
                  individuals.push(
                    individual.first_name + " " + individual.last_name
                  );
                }
                count += 1;
                returnGroup(count, individuals);
              }
            );
          } else {
            count += 1;
            returnGroup(count, individuals);
          }
          if (group.individual_2) {
            individualModel.findOne(
              { _id: group.individual_2 },
              (err, individual) => {
                if (individual) {
                  individuals.push(
                    individual.first_name + " " + individual.last_name
                  );
                }
                count += 1;
                returnGroup(count, individuals);
              }
            );
          } else {
            count += 1;
            returnGroup(count, individuals);
          }
          if (group.individual_3) {
            individualModel.findOne(
              { _id: group.individual_3 },
              (err, individual) => {
                if (individual) {
                  individuals.push(
                    individual.first_name + " " + individual.last_name
                  );
                }
                count += 1;
                returnGroup(count, individuals);
              }
            );
          } else {
            count += 1;
            returnGroup(count, individuals);
          }
          if (group.individual_4) {
            individualModel.findOne(
              { _id: group.individual_4 },
              (err, individual) => {
                if (individual) {
                  individuals.push(
                    individual.first_name + " " + individual.last_name
                  );
                }
                count += 1;
                returnGroup(count, individuals);
              }
            );
          } else {
            count += 1;
            returnGroup(count, individuals);
          }
          if (group.individual_5) {
            individualModel.findOne(
              { _id: group.individual_5 },
              (err, individual) => {
                if (individual) {
                  individuals.push(
                    individual.first_name + " " + individual.last_name
                  );
                }
                count += 1;
                returnGroup(count, individuals);
              }
            );
          } else {
            count += 1;
            returnGroup(count, individuals);
          }
          if (group.individual_6) {
            individualModel.findOne(
              { _id: group.individual_6 },
              (err, individual) => {
                if (individual) {
                  individuals.push(
                    individual.first_name + " " + individual.last_name
                  );
                }
                count += 1;
                returnGroup(count, individuals);
              }
            );
          } else {
            count += 1;
            returnGroup(count, individuals);
          }
        } else {
          res.status(200).json({ message: "Group not found" });
        }
      });
    } else {
      res.status(400).json({ message: "Please include a group name" });
    }
  },
  get: function(req, res) {
    groupModel.find({}, function(err, groups) {
      if (err) {
        res.status(500).json({ message: "Error finding groups" });
      } else {
        res.status(200).json({ groups });
      }
    });
  },
  create: function(req, res) {
    const name = sanitize(req.body.name);
    if (name) {
      groupModel.findOne({ name }, function(err, group) {
        if (err) {
          res.status(500).json({ message: "Error checking groups" });
        }
        if (group) {
          res.status(200).json({ message: "Group name taken" });
        } else {
          groupModel.create({ name }, function(err, group) {
            if (err) {
              res.status(500).json({ message: "Error creating group" });
            } else {
              res.status(200).json({ group });
            }
          });
        }
      });
    } else {
      res.status(400).json({ message: "Please include a group name" });
    }
  },
  addIndividual: function(req, res) {
    const position = sanitize(req.body.position);
    const individual_id = sanitize(req.body.individual_id);
    const group_name = sanitize(req.body.group_name);
    if (position && individual_id && group_name) {
      groupModel.findOne({ name: group_name }, function(err, group) {
        if (err) {
          res.status(500).json({ message: "Error finding group" });
        } else if (group) {
          switch (position) {
            case "0":
              group.individual_0 = individual_id;
              break;
            case "1":
              group.individual_1 = individual_id;
              break;
            case "2":
              group.individual_2 = individual_id;
              break;
            case "3":
              group.individual_3 = individual_id;
              break;
            case "4":
              group.individual_4 = individual_id;
              break;
            case "5":
              group.individual_5 = individual_id;
              break;
            case "6":
              group.individual_6 = individual_id;
              break;
          }
          group.save().then(() => {
            res.status(200).json({ group });
          });
        } else {
          res.status(200).json({ message: "Group not found" });
        }
      });
    } else {
      res.status(400).json({ message: "Please include all fields" });
    }
  },

  email: function(req, res) {
    var form = new formidable.IncomingForm();
    console.log(form);
    form.parse(req, function(err, fields, files) {
      console.log("parsed");
      console.log(files);
      console.log(fields);

      if (files.picture && fields.group_name) {
        const path = files.picture.path;
        const group_name = fields.group_name;
        groupModel.findOne({ name: group_name }, (err, group) => {
          if (err) {
            res.status(500).json({ message: "Error finding group" });
          } else {
            if (group) {
              if (group.individual_0) {
                individualModel.findOne(
                  { _id: group.individual_0 },
                  (err, individual) => {
                    if (individual) {
                      main(path, individual.email).catch(console.error);
                    }
                  }
                );
              }
              if (group.individual_1) {
                individualModel.findOne(
                  { _id: group.individual_1 },
                  (err, individual) => {
                    if (individual) {
                      main(path, individual.email).catch(console.error);
                    }
                  }
                );
              }
              if (group.individual_2) {
                individualModel.findOne(
                  { _id: group.individual_2 },
                  (err, individual) => {
                    if (individual) {
                      main(path, individual.email).catch(console.error);
                    }
                  }
                );
              }
              if (group.individual_3) {
                individualModel.findOne(
                  { _id: group.individual_3 },
                  (err, individual) => {
                    if (individual) {
                      main(path, individual.email).catch(console.error);
                    }
                  }
                );
              }
              if (group.individual_4) {
                individualModel.findOne(
                  { _id: group.individual_4 },
                  (err, individual) => {
                    if (individual) {
                      main(path, individual.email).catch(console.error);
                    }
                  }
                );
              }
              if (group.individual_5) {
                individualModel.findOne(
                  { _id: group.individual_5 },
                  (err, individual) => {
                    if (individual) {
                      main(path, individual.email).catch(console.error);
                    }
                  }
                );
              }
              if (group.individual_6) {
                individualModel.findOne(
                  { _id: group.individual_6 },
                  (err, individual) => {
                    if (individual) {
                      main(path, individual.email).catch(console.error);
                    }
                  }
                );
              }
              res.end();
            } else {
              res.status(200).json({ message: "Group not found" });
            }
          }
        });
      } else {
        res.status(400).json({ message: "Please include all fields" });
      }
    });
  }
};
