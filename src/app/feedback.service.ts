import { Injectable } from '@angular/core';
import { Feedback } from './feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbacks: Feedback[] = [{
    id: 1,
    name: 'Abishek',
    feedback:'Nice website for shopping'
},
{
    id: 2,
    name: 'Jackson',
    feedback:'There is leatest trends'

},
{
  id: 3,
  name: 'Alen',
  feedback:'delvered at time!'

},
{
  id: 4,
  name: 'Cyril',
  feedback:'nice...!'

},
{
  id: 5,
  name: 'Anoop',
  feedback:'Got what Iam sreaching for'

},
{
  id: 6,
  name: 'Vishnu',
  feedback:'Good one :)'

},
{
  id: 7,
  name: 'Vortex',
  feedback:'Good Quality Products'
},
{
  id: 8,
  name: 'Retnox',
  feedback:'Good Quality Watches '
}
];

public getFeedbacks(): any {
  const feedbacksObservable = new Observable(observer => {
         setTimeout(() => {
             observer.next(this.feedbacks);
         }, 1000);
  });

  return feedbacksObservable;
}
}

