#!/bin/bash
cd /home/kavia/workspace/code-generation/autoparthub-26422-624dcf96/auto_part_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

