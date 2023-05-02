import JsBarcode from "jsbarcode";

export default function generateBarcode(canvasId, barcodeValue) {
    JsBarcode(`#${canvasId}`, barcodeValue, {
      format: "CODE128",
      width: 1,
      height: 70,
      displayValue: true,
    });
  }