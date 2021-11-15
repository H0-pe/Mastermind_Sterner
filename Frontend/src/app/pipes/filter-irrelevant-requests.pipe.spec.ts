import { FilterIrrelevantRequestsPipe } from './filter-irrelevant-requests.pipe';

describe('FilterIrrelevantRequestsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterIrrelevantRequestsPipe();
    expect(pipe).toBeTruthy();
  });
});
