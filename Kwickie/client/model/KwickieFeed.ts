export class KwickieFeed{
	answerUser: any; 
	answerUserId: number; 
	associatedKwickies: any; 
	associatedKwickiesAnswerersCount: number; 
	associatedKwickiesTotalCount: number; 
	deleted: boolean ;
	descriptionComment: any ;
	featured: number; 
	id: number; 
	kwickieCommentProperties: any; 
	kwickieVideo: any; 
	kwickieVideoId:  number; 
	liked: boolean; 
	likesCount: number; 
	publishDate: string; 
	questionId: number; 
	questionKwickie: any; 
	questionSentToMany: boolean; 
	questionTopicId: number; 
	questionUser: any; 
	questionUserId: number; 
	questionVideo: any; 
	questionVideoId: number; 
	shareUrl: string; status: number; 
	topicDefault: boolean;
	topicFollowingProperties: any; 
	topicId: number; 

	message(){
		return this.descriptionComment? this.descriptionComment.message : "No Message";
	}
}