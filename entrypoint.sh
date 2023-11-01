#!/bin/bash

while true; do
    echo "helloworld"

    echo "I will sleep now"

    echo "somestuff from my container" > /persistent/file2
    # to mimick a server or a daemon like process that keeps running forever.
    sleep 3
done
