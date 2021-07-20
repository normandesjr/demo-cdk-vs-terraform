resource "aws_dynamodb_table" "basic-dynamodb-table" {
  name           = "GameScores"
  hash_key       = "UserId"
  range_key      = "GameTitle"
  billing_mode   = "PAY_PER_REQUEST"

  attribute {
    name = "UserId"
    type = "S"
  }

  attribute {
    name = "GameTitle"
    type = "S"
  }
}