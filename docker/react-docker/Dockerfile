FROM node

# 컨테이너 안의 작업 디렉토리 = CMD 를 실행할 위치
WORKDIR /app
COPY . /app
RUN npm install
# 이미지를 토대로 컨테이너가 동작
# 컨테이너가 노드를 돌릴 때 소스 코드가 필요하다.
# 이미지에 소스코드르 ㄹ넣는거예요
# 작업 디렉토리에 넣어야 저 cmd가 실행

CMD ["npm", "run", "start"]
