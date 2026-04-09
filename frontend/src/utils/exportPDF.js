import jsPDF from "jspdf";

export function exportReport(systems) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Monitoring Dashboard Report", 20, 20);

  let y = 30;

  systems.forEach((sys, index) => {
    doc.setFontSize(10);

    doc.text(
      `${index + 1}. ${sys.id} (${sys.type})`,
      10,
      y
    );

    y += 6;

    doc.text(
      `CPU: ${sys.cpu}% | Memory: ${sys.memory}% | Disk: ${sys.disk}%`,
      10,
      y
    );

    y += 6;

    doc.text(
      `Health: ${sys.health} | Status: ${sys.status}`,
      10,
      y
    );

    y += 10;

    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("Monitoring_Report.pdf");
}