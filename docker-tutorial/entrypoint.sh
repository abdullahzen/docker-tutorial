#!/bin/bash

while true; do
    sh process_strings.sh
    # to mimick a server or a daemon like process that keeps running forever.
    sleep 3
done
