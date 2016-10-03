import {task} from 'gulp';
import {cleanTask} from '../task_helpers';

//cleans folder server
task('clean', cleanTask('server'));