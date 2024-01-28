#!/bin/bash

NODE_ENV="production"

if [ "$NODE_ENV" = "development" ];
 then 
    echo "npm install"
else 
 echo "npm install --only=production";
fi
