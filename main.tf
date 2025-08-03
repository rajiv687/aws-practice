provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "firstEC2" {
  ami           = "ami-0c02fb55956c7d316"  #  valid AMI in us-east-1
  instance_type = "t2.micro"

  tags = {
    Name = "MyFirstEC2"
  }
}
