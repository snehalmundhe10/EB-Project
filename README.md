# Elastic Beanstalk Deployment 
Deployment of image uploading and filering application on Elastic Beanstalk

### Prerequisite
1. AWS account

### Procedure 
1. Run npm install
2. Run npm run dev
3. Configure local repository for elastic beanstalk environment by running eb init
4. Modify config.yml of .elasticbeanstalk/config.yml
5. Create the elastic beanstalk environment and deploy an application version to it by running eb create

### AWS Services / Dependencies
1. AWS Elastic Beanstalk

### Elastic Beanstalk URLs
1. Dev : http://image-filter-starter-code-dev2222.us-east-2.elasticbeanstalk.com
2. Example : http://image-filter-starter-code-dev2222.us-east-2.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

### Deployment Screenshots
1. Deployment on Elastic Beanstalk
![alt text](https://github.com/snehalmundhe10/EB-Project/blob/main/deplyment_screenshots/0.%20Image-Filter%20deployment%20on%20elastic%20beanstalk.png)

2. Filtered image 
![alt text](https://github.com/snehalmundhe10/EB-Project/blob/main/deplyment_screenshots/1.%20filteredimage%20output.png)

3. Original image 
![alt text](https://github.com/snehalmundhe10/EB-Project/blob/main/deplyment_screenshots/2.%20original%20image.png)

### Author
Snehal Mundhe

### Acknowledgments
Udacity Cloud Developer NanoDegree
