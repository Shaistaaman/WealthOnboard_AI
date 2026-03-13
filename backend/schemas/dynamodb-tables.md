# DynamoDB Table Schemas

## Users Table

- **Table Name**: `wealthonboard-users`
- **Partition Key**: `userId` (String)
- **Attributes**:
  - `email` (String)
  - `firstName` (String)
  - `lastName` (String)
  - `accountType` (String) - Individual/Corporate
  - `onboardingStatus` (String)
  - `kycStatus` (String)
  - `createdAt` (String)
  - `updatedAt` (String)

## Accounts Table

- **Table Name**: `wealthonboard-accounts`
- **Partition Key**: `accountId` (String)
- **Attributes**:
  - `userId` (String)
  - `balance` (Number)
  - `currency` (String)
  - `accountType` (String)
  - `status` (String)

## Transactions Table

- **Table Name**: `wealthonboard-transactions`
- **Partition Key**: `transactionId` (String)
- **Sort Key**: `timestamp` (String)
- **Attributes**:
  - `fromAccountId` (String)
  - `toAccountId` (String)
  - `amount` (Number)
  - `type` (String)
  - `status` (String)

## Documents Table

- **Table Name**: `wealthonboard-documents`
- **Partition Key**: `documentId` (String)
- **Attributes**:
  - `userId` (String)
  - `documentType` (String)
  - `s3Key` (String)
  - `verificationStatus` (String)
  - `uploadedAt` (String)
