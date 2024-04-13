import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './schema/course.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseDto } from './dto/course.dto';

@Injectable()
export class CourseService {
    constructor(@InjectModel(Course.name) private readonly CourseModel: Model<Course>) { }
    
    async findAll(): Promise<CourseDto[]> {
        return await this.CourseModel.find();
      }
      async findOne(id: string): Promise<CourseDto> {
          const singleCourse = await this.CourseModel.findOne({ _id: id });
          if (!singleCourse) {
            throw new NotFoundException('Course not found');
          }
          return singleCourse;
    }
    
    async create(course: CourseDto): Promise<Course> {
        try {
            const newCourse = new this.CourseModel({
                title: course.title,
              fee: course.fee,
              description: course.description,
              
            });
             await newCourse.save();
             return newCourse;
        } catch (e) {
            throw new NotFoundException(e);
        }
       
      }
    
      async delete(id: string): Promise<CourseDto> {
        const deletedCourse = await this.CourseModel.findByIdAndDelete(id);
        if (!deletedCourse) {
          throw new NotFoundException('Course not found');
        }
        return deletedCourse;
      }
    
      async update(id: string, Course: Course): Promise<Course> {
          const newCourse = this.CourseModel.findByIdAndUpdate(id, Course, { new: true });
          if (!newCourse) {
            throw new NotFoundException('Course not found');
          }
          return newCourse;
    }
    
}
