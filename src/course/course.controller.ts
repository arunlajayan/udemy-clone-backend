import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Patch,
  } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './dto/course.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}

    @Get('all')
  findAll(): Promise<CourseDto[]> {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<CourseDto> {  
    return this.courseService.findOne(id);
  }

  @Post('create')
  create(@Body() createCourse: any): Promise<CourseDto> {
    return this.courseService.create(createCourse);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<CourseDto> {
    return this.courseService.delete(id);
  }

  @Patch(':id')
  update(@Body() updateCourseDtoDto: any, @Param('id') id): Promise<CourseDto> {
    return this.courseService.update(id,updateCourseDtoDto);
  }
}
