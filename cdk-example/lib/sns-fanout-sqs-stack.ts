import * as cdk from '@aws-cdk/core';
import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';

export class SnsFanoutSqsStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const topic = new sns.Topic(this, 'Topic1', {
            displayName: 'Meu topico a partir do CDK'
        })

        const queue = new sqs.Queue(this, 'Queue1');

        topic.addSubscription(new subs.SqsSubscription(queue));
    }
}
