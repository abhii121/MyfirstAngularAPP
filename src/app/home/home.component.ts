import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedbacks: Feedback[]=[]

  constructor(private feedbackservice: FeedbackService) { }

  ngOnInit(): void {
    const feedbacksObservable = this.feedbackservice.getFeedbacks();
    feedbacksObservable.subscribe((feedbacksData: Feedback[]) => {
      this.feedbacks = feedbacksData;
  });
  }

}
