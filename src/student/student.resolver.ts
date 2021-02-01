import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { of } from 'rxjs';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(returns => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
