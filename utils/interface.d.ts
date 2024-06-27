import { VariantProps } from "class-variance-authority";
import { Document } from "mongoose";
import { ReactNode } from "react";

export interface iCompany {
  companyName: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  planCost: number;
  plan: string;
  role: string;
  project: {}[],
  staff: {}[]
}

export interface iCompanyData extends iCompany, Document {}

export interface iStaff {
  name: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  role: string;
  bio: string,
  steps: {}[]
  company: {}
}

export interface iStaffData extends iStaff, Document {}

export interface iProject {
  title: string;
  dueDate: Date;
  passigned: string;
  task: {}[]
  company: {}
}

export interface iProjectData extends iProject, Document {}


export interface iTask {
  title: string;
  steps: {}[];
  company: {};
}

export interface iTaskData extends iTask, Document {}

export interface iStep {
  title: string;
  company: {};
}

export interface iStepData extends iStep, Document {}



