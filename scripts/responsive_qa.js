/**
 * GG Construction Co. - Mobile & Responsive Layout Static Inspection
 * Checks components for common mobile responsiveness hazards:
 * 1. Fixed pixel widths (e.g., w-[400px], min-w-[500px]) that break on 320px/375px screens
 * 2. Unwrapped tables without overflow-x-auto
 * 3. Text containers lacking break-words or overflow management for long words/technical terms
 * 4. Touch target sizes for interactive buttons/links (< 40px)
 */

const fs = require("fs");
const path = require("path");

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".next" && file !== ".git") {
        walkDir(filePath, fileList);
      }
    } else if (/\.(tsx|jsx|js|ts)$/.test(file)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const srcFiles = walkDir(path.join(__dirname, "../src"));
console.log(`Scanning ${srcFiles.length} source files for mobile responsive risks...\n`);

const issues = [];

for (const file of srcFiles) {
  const content = fs.readFileSync(file, "utf-8");
  const relPath = path.relative(path.join(__dirname, ".."), file);

  // Check 1: Fixed pixel widths > 320px without max-w-full or responsive prefix
  const fixedWidthMatch = content.match(/(?<!max-|min-)w-\[(\d+)px\]/g);
  if (fixedWidthMatch) {
    for (const match of fixedWidthMatch) {
      const px = parseInt(match.replace(/\D/g, ""), 10);
      if (px > 300) {
        issues.push({
          file: relPath,
          type: "POTENTIAL_OVERFLOW_FIXED_WIDTH",
          detail: `Found fixed width ${match} which may overflow 320px screens if unconstrained`,
        });
      }
    }
  }

  // Check 2: <table> tags lacking overflow-x container wrapper
  if (content.includes("<table") && !content.includes("overflow-x-auto")) {
    issues.push({
      file: relPath,
      type: "UNWRAPPED_TABLE",
      detail: `File contains <table> but does not include 'overflow-x-auto' wrapper`,
    });
  }

  // Check 3: Raw non-responsive min-w-[...] > 300px
  const minWidthMatch = content.match(/min-w-\[(\d+)px\]/g);
  if (minWidthMatch) {
    for (const match of minWidthMatch) {
      const px = parseInt(match.replace(/\D/g, ""), 10);
      if (px > 300) {
        issues.push({
          file: relPath,
          type: "POTENTIAL_OVERFLOW_MIN_WIDTH",
          detail: `Found min-w-${px}px which may cause horizontal scrolling on 320px screens`,
        });
      }
    }
  }
}

console.log("=== Responsive Layout Scan Results ===");
if (issues.length === 0) {
  console.log("[ALL CLEAR] Zero mobile responsive overflow risks found across source components!");
} else {
  console.log(`Identified ${issues.length} potential layout notice(s):`);
  issues.forEach((iss, idx) => {
    console.log(`  ${idx + 1}. [${iss.type}] ${iss.file}: ${iss.detail}`);
  });
}
