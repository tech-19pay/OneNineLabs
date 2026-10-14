import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_sample_scorecard():
    output_path = r"d:\Office Projects\ui-oneninelabs\OneNineLabs\public\sample-typing-report.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    PRIMARY = colors.HexColor("#0f172a")     # Dark Slate
    ACCENT_BLUE = colors.HexColor("#0ea5e9") # Sky Blue
    NAVY = colors.HexColor("#1e293b")
    SUCCESS = colors.HexColor("#10b981")     # Green
    DANGER = colors.HexColor("#ef4444")      # Red
    WARNING = colors.HexColor("#f59e0b")     # Amber
    MUTED_BG = colors.HexColor("#f8fafc")
    BORDER_COLOR = colors.HexColor("#cbd5e1")
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=PRIMARY,
        alignment=0
    )
    
    subtitle_style = ParagraphStyle(
        'DocSub',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#64748b"),
        alignment=0
    )

    badge_style = ParagraphStyle(
        'PassedBadge',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=14,
        textColor=colors.white,
        alignment=1
    )

    section_hdr = ParagraphStyle(
        'SecHdr',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=NAVY
    )

    cell_bold = ParagraphStyle(
        'CellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=PRIMARY
    )

    cell_regular = ParagraphStyle(
        'CellReg',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#334155")
    )

    story = []

    # 1. HEADER BRANDING & BADGE
    header_data = [
        [
            Paragraph("<b>OneNineLabs</b> Typing Assessment Engine<br/><font color='#64748b' size=9>Official Candidate Scorecard & Performance Audit Report</font>", title_style),
            Table(
                [[Paragraph("STATUS: QUALIFIED", badge_style)]],
                colWidths=[150],
                rowHeights=[28],
                style=TableStyle([
                    ('BACKGROUND', (0,0), (-1,-1), SUCCESS),
                    ('ALIGN', (0,0), (-1,-1), 'CENTER'),
                    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
                    ('CORNERPAD', (0,0), (-1,-1), 4),
                ])
            )
        ]
    ]
    header_table = Table(header_data, colWidths=[380, 160])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT_BLUE, spaceAfter=12))

    # 2. CANDIDATE & TEST METADATA TABLE
    meta_data = [
        [
            Paragraph("<b>Candidate Name:</b>", cell_bold), Paragraph("Rahul Sharma", cell_regular),
            Paragraph("<b>Roll / Application ID:</b>", cell_bold), Paragraph("ONL-2026-89421", cell_regular)
        ],
        [
            Paragraph("<b>Examination:</b>", cell_bold), Paragraph("Govt. Steno & Typing Benchmark Test", cell_regular),
            Paragraph("<b>Evaluation Standard:</b>", cell_bold), Paragraph("SSC / High Court Standard Marking", cell_regular)
        ],
        [
            Paragraph("<b>Date & Time:</b>", cell_bold), Paragraph("13-Oct-2026 10:30 AM", cell_regular),
            Paragraph("<b>Passage Code:</b>", cell_bold), Paragraph("PARAGRAPH_LEGAL_042", cell_regular)
        ],
        [
            Paragraph("<b>Keyboard Layout:</b>", cell_bold), Paragraph("Standard US QWERTY", cell_regular),
            Paragraph("<b>Test Mode:</b>", cell_bold), Paragraph("Strict Lockdown (Backspace Counted)", cell_regular)
        ]
    ]
    meta_table = Table(meta_data, colWidths=[105, 165, 125, 145])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), MUTED_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('INNERGRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 14))

    # 3. CORE PERFORMANCE SUMMARY
    story.append(Paragraph("1. Primary Speed & Accuracy Telemetry", section_hdr))
    story.append(Spacer(1, 6))

    perf_data = [
        [
            Paragraph("Metric", cell_bold),
            Paragraph("Candidate Value", cell_bold),
            Paragraph("Benchmark Criteria", cell_bold),
            Paragraph("Performance Status", cell_bold)
        ],
        [
            Paragraph("Gross Speed", cell_regular),
            Paragraph("<b>42.8 WPM</b>", cell_bold),
            Paragraph("Min. 35.0 WPM", cell_regular),
            Paragraph("<font color='#10b981'><b>Above Target (+7.8 WPM)</b></font>", cell_regular)
        ],
        [
            Paragraph("Net Accurate Speed", cell_regular),
            Paragraph("<b>39.1 WPM</b>", cell_bold),
            Paragraph("Min. 30.0 WPM", cell_regular),
            Paragraph("<font color='#10b981'><b>PASSED</b></font>", cell_regular)
        ],
        [
            Paragraph("Gross Keystrokes", cell_regular),
            Paragraph("<b>2,140 depressions</b>", cell_regular),
            Paragraph("5 Keystrokes = 1 Word", cell_regular),
            Paragraph("Standard Validated", cell_regular)
        ],
        [
            Paragraph("Accuracy Percentage", cell_regular),
            Paragraph("<b>96.8 %</b>", cell_bold),
            Paragraph("Min. 95.0 %", cell_regular),
            Paragraph("<font color='#10b981'><b>Within 5% Allowance</b></font>", cell_regular)
        ],
        [
            Paragraph("Test Duration", cell_regular),
            Paragraph("10 Minutes 00 Sec", cell_regular),
            Paragraph("Fixed 10 Min Exam", cell_regular),
            Paragraph("Completed on Time", cell_regular)
        ],
        [
            Paragraph("Backspace Utilized", cell_regular),
            Paragraph("18 Keystrokes", cell_regular),
            Paragraph("Permitted (Logged)", cell_regular),
            Paragraph("Low Backspace Usage", cell_regular)
        ]
    ]
    perf_table = Table(perf_data, colWidths=[130, 120, 140, 150])
    perf_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#e2e8f0")),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('INNERGRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(perf_table)
    story.append(Spacer(1, 14))

    # 4. ERROR & PENALTY AUDIT
    story.append(Paragraph("2. Official Error Classification & Penalty Audit", section_hdr))
    story.append(Spacer(1, 6))

    error_data = [
        [
            Paragraph("Category", cell_bold),
            Paragraph("Count", cell_bold),
            Paragraph("Penalty Multiplier", cell_bold),
            Paragraph("Total Penalty Deducted", cell_bold)
        ],
        [
            Paragraph("<b>Full Mistakes:</b><br/><font color='#64748b' size=7.5>Omission of words, substitution of words, add extra word</font>", cell_regular),
            Paragraph("<b>2</b>", cell_regular),
            Paragraph("1.0 Word / Mistake", cell_regular),
            Paragraph("<font color='#ef4444'><b>- 2.0 Words</b></font>", cell_regular)
        ],
        [
            Paragraph("<b>Half Mistakes:</b><br/><font color='#64748b' size=7.5>Spacing error, capitalization, punctuation, transposition</font>", cell_regular),
            Paragraph("<b>3</b>", cell_regular),
            Paragraph("0.5 Word / Mistake", cell_regular),
            Paragraph("<font color='#f59e0b'><b>- 1.5 Words</b></font>", cell_regular)
        ],
        [
            Paragraph("<b>Total Net Penalty:</b>", cell_bold),
            Paragraph("<b>5 Total Errors</b>", cell_bold),
            Paragraph("Net Penalty Applied", cell_bold),
            Paragraph("<b>- 3.5 Words (3.7 WPM)</b>", cell_bold)
        ]
    ]
    error_table = Table(error_data, colWidths=[200, 80, 120, 140])
    error_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#f1f5f9")),
        ('BACKGROUND', (0,-1), (-1,-1), colors.HexColor("#e2e8f0")),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('INNERGRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(error_table)
    story.append(Spacer(1, 14))

    # 5. PASSAGE HIGHLIGHT SAMPLE
    story.append(Paragraph("3. Detailed Keystroke & Word-by-Word Audit Extract", section_hdr))
    story.append(Spacer(1, 4))
    
    passage_html = """
    <font color='#334155'>The judicial process requires strict adherence to constitutional norms. </font>
    <font color='#10b981'><b>[OK]</b> Every </font>
    <font color='#ef4444'><b><strike>citzen</strike> citizen</b> [Full Error: Misspelling]</font>
    <font color='#334155'> is entitled to fair representation before the tribunal. </font>
    <font color='#f59e0b'><b>[Half Error: Missing Space]in_accordance</b></font>
    <font color='#334155'> with established precedent and legal provisions. The registry acknowledged receipt of the revised appeal on schedule.</font>
    """
    passage_para = Paragraph(passage_html, ParagraphStyle(
        'PassageBox',
        parent=styles['Normal'],
        fontSize=8.5,
        leading=13,
        textColor=PRIMARY
    ))
    
    passage_box = Table([[passage_para]], colWidths=[540])
    passage_box.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#94a3b8")),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(passage_box)
    story.append(Spacer(1, 14))

    # 6. SIGN-OFF & CERTIFICATION FOOTER
    footer_text = """
    <font size=7.5 color='#64748b'>
    <b>Report Validation:</b> Certified by OneNineLabs Automated Evaluation Engine v4.2.<br/>
    Checksum Verification: <code>SHA256: 8f42d9...e391b0</code> &nbsp;|&nbsp; 
    This report conforms to SSC, High Court, and State Stenographer Examination grading specifications.
    </font>
    """
    story.append(Paragraph(footer_text, styles['Normal']))

    doc.build(story)
    print("PDF generated successfully at:", output_path)

if __name__ == '__main__':
    create_sample_scorecard()
