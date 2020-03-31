#base image
FROM node

WORKDIR /usr/app
#Copy the dependencies file
COPY ./package.json ./
# install and cache app dependencies
RUN yarn
#copy all files from current directory to docker
COPY ./ ./

EXPOSE 8090
ENV CI true
# start app
CMD ["yarn","start"]