#!/usr/bin/env python3
"""
LibreOffice headless wrapper.

Runs soffice with a temporary user profile to avoid lock conflicts when
multiple conversions run in the same session or in sandboxed environments.

Usage (mirrors soffice CLI):
    python scripts/office/soffice.py --headless --convert-to pdf file.pptx
    python scripts/office/soffice.py --headless --convert-to png --outdir out/ file.pptx
"""
import subprocess
import sys
import tempfile
import os

def main():
    args = sys.argv[1:]

    with tempfile.TemporaryDirectory(prefix="soffice-profile-") as profile_dir:
        cmd = [
            "soffice",
            f"-env:UserInstallation=file://{profile_dir}",
        ] + args

        result = subprocess.run(cmd)
        sys.exit(result.returncode)

if __name__ == "__main__":
    main()
