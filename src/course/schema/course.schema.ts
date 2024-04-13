import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({ versionKey: false, timestamps: true })
export class Course extends Document {
  @Prop()
  title: string;
  @Prop()
  fee: number;
  @Prop()
  description: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
