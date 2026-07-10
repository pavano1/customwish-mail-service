import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { backStock } from "./controllers/backStock.js";
import { cancelOrder } from "./controllers/cancelOrder.js";
import { career } from "./controllers/career.js";
import { contact } from "./controllers/contact.js";
import { corporateEnquiry } from "./controllers/corporateEnquiry.js";
import { corporateReview } from "./controllers/corporateReview.js";
import { enquiry } from "./controllers/enquiry.js";
import { enquiryEvent } from "./controllers/enquiryEvent.js";
import { giftVoucher } from "./controllers/giftVoucher.js";
import { leaveComment } from "./controllers/leaveComment.js";
import { notifyMe } from "./controllers/notifyMe.js";
import { orderConfirmation } from "./controllers/orderConfirmation.js";
import { outStock } from "./controllers/outStock.js";
import { productReview } from "./controllers/productReview.js";
import { resendOTP } from "./controllers/resendOTP.js";
import { resetPassword } from "./controllers/resetPassword.js";
import { returnOrder } from "./controllers/returnOrder.js";
import { reviewEvent } from "./controllers/reviewEvent.js";
import { verifyOTP } from "./controllers/verifyOTP.js";
import { welcome } from "./controllers/welcome.js";
import { orderRefundStatus } from "./controllers/orderRefundStatus.js";
import { orderChangeStatus } from "./controllers/orderChangeStatus.js";

const app = express();
const options = {
  allowedHeaders: [
    "sessionId",
    "Content-Type",
    "Authorization",
    "authorization",
  ],
  exposedHeaders: ["sessionId"],
  origin: "*",
  methods: "HEAD, get, post",
  credentials: false,
  preflightContinue: false,
};
app.use(cors(options));
const router = express.Router();
app.use(express.json());
app.use(bodyParser.json());

app.get("/", cors(options), (req, res) => {
  res.send("Hello from Server");
});


app.post("/orderRefundStatus", (req, res) => {
  orderRefundStatus(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/orderChangeStatus", (req, res) => {
  orderChangeStatus(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/backStock", (req, res) => {
  backStock(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/cancelOrder", (req, res) => {
  cancelOrder(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/career", (req, res) => {
  career(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/contact", (req, res) => {
  contact(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/corporateEnquiry", (req, res) => {
  corporateEnquiry(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/corporateReview", (req, res) => {
  corporateReview(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/enquiry", (req, res) => {
  enquiry(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/enquiryEvent", (req, res) => {
  enquiryEvent(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/giftVoucher", (req, res) => {
  giftVoucher(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/leaveComment", (req, res) => {
  leaveComment(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/notifyMe", (req, res) => {
  notifyMe(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/orderConfirmation", (req, res) => {
  orderConfirmation(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/outStock", (req, res) => {
  outStock(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/productReview", (req, res) => {
  productReview(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/resendOTP", (req, res) => {
  resendOTP(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/resetPassword", (req, res) => {
  resetPassword(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/returnOrder", (req, res) => {
  returnOrder(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/reviewEvent", (req, res) => {
  reviewEvent(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/verifyOTP", (req, res) => {
  verifyOTP(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/welcome", (req, res) => {
  welcome(req?.body, (err, result) => {
    if (err) {
      res.status(200).send([{ data: err }]);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

let PORT = 5000;

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
