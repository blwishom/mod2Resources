class Invoice {
  constructor(invoiceNumber, client) {
    this.invoiceNumber = invoiceNumber;
    this.client = client;
  }

  getClientName() {
    return this.client.name;
  }
}
class Receipt {
  constructor(receiptNum, date) {
    this.receiptNum = receiptNum;
    this.date = date
  }
}
const arr = [1, 3, 4]

module.exports = {
  Invoice, Receipt, arr
};
