FROM debian:buster-slim

WORKDIR /api
RUN apt-get update
RUN apt-get install -y python3.7 python3-pip
RUN apt-get install -y default-libmysqlclient-dev
RUN python3.7 -V
COPY ./requirements.txt ./requirements.txt
RUN python3.7 -m pip install -r requirements.txt