import { copyResource } from './loutils';
const glob = require('glob');
import { LearningObject } from './learningobjects';
import { readFile } from '../utils/futils';

export abstract class WebLearningObject extends LearningObject {
  constructor(parent: LearningObject, resourceId: string) {
    super(parent);
    this.link = readFile(resourceId);
  }

  publish(path: string): void {}
}

export class Video extends WebLearningObject {
  videoid: string;

  constructor(parent: LearningObject) {
    super(parent, 'videoid');
    this.icon = 'film';
    super.reap('video');
    this.lotype = 'video';
  }
}

export class Git extends WebLearningObject {
  githubid: string;

  constructor(parent: LearningObject) {
    super(parent, 'githubid');
    this.icon = 'git square';
    super.reap('github');
    this.absoluteLink = true;
    this.lotype = 'git';
  }

  publish(path: string): void {
    copyResource(this.folder, path);
  }
}