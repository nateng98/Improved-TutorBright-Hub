import { tokens } from "../theme";

export const mockDataTutors = [
  {
    id: 1,
    name: "Nathan",
    subject: "mathematic",
    phone: "204-588-2344",
    timeZone: "Canada/Central",
    lookForStudent: true,
    students: [
      {
        name: "Jane Doe",
      },
    ],
  },
];

export const mockDataStudents = [
  {
    id: 1,
    name: "Jane Doe",
    grade: 11,
    subject: "Pre-calculus",
    guardian: "John Doe",
    phone: "204-588-2344",
    email: "johndoe@gmail.com",
  },
  {
    id: 2,
    name: "Michael Smith",
    grade: 10,
    subject: "Biology",
    guardian: "Sarah Smith",
    phone: "204-612-3456",
    email: "sarahsmith@gmail.com",
  },
  {
    id: 3,
    name: "Emily Johnson",
    grade: 12,
    subject: "Physics",
    guardian: "Robert Johnson",
    phone: "204-789-6543",
    email: "robertjohnson@gmail.com",
  },
];

export const mockDataPastSessions = [
  {
    id: "1",
    title: "Tutoring Session with Jane",
    start: "2024-08-12T10:30:00",
    end: "2024-08-12T11:30:00",
    confirm: false,
  },
  {
    id: "2",
    title: "Tutoring Session with Michael",
    start: "2024-08-15T09:00:00",
    end: "2024-08-15T10:00:00",
    confirm: true,
  },
  {
    id: "3",
    title: "Tutoring Session with Emily",
    start: "2024-08-18T14:00:00",
    end: "2024-08-18T15:00:00",
    confirm: true,
  },
  {
    id: "4",
    title: "Tutoring Session with Emily",
    start: "2024-08-20T16:00:00",
    end: "2024-08-20T17:00:00",
    confirm: false,
  },
  {
    id: "5",
    title: "Tutoring Session with Michael",
    start: "2024-08-22T11:00:00",
    end: "2024-08-22T12:00:00",
    confirm: false,
  },
];

export const mockDataUpcomingSessions = [
  {
    id: "1",
    title: "Tutoring Session with Jane",
    start: "2024-09-12T10:30:00",
    end: "2024-09-12T11:30:00",
    cancel: false,
  },
  {
    id: "2",
    title: "Tutoring Session with Michael",
    start: "2024-09-15T09:00:00",
    end: "2024-09-15T10:00:00",
    cancel: false,
  },
  {
    id: "3",
    title: "Tutoring Session with Emily",
    start: "2024-09-18T14:00:00",
    end: "2024-09-18T15:00:00",
    cancel: true,
  },
  {
    id: "4",
    title: "Tutoring Session with Jane",
    start: "2024-09-19T10:30:00",
    end: "2024-09-19T11:30:00",
    cancel: false,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    student: "Jane Doe",
    numberSessions: 4,
    total: 100,
  },
  {
    id: 2,
    student: "Michael Smith",
    numberSessions: 5,
    total: 125,
  },
  {
    id: 3,
    student: "Emily Johnson",
    numberSessions: 3,
    total: 75,
  },
];

export const mockLineData = [
  {
    id: "Jane Doe",
    color: tokens("dark").yellowAccent[500],
    data: [
      { x: "Sep 2023", y: 100 },
      { x: "Oct 2023", y: 100 },
      { x: "Nov 2023", y: 250 },
      { x: "Dec 2023", y: 200 },
      { x: "Jan 2024", y: 100 },
      { x: "Feb 2024", y: 125 },
      { x: "Mar 2024", y: 100 },
      { x: "Apr 2024", y: 150 },
      { x: "May 2024", y: 150 },
      { x: "June 2024", y: 100 },
    ],
  },
  {
    id: "Michael Smith",
    color: tokens("dark").grey[500],
    data: [
      { x: "Sep 2023", y: 120 },
      { x: "Oct 2023", y: 130 },
      { x: "Nov 2023", y: 140 },
      { x: "Dec 2023", y: 250 },
      { x: "Jan 2024", y: 160 },
      { x: "Feb 2024", y: 170 },
      { x: "Mar 2024", y: 160 },
      { x: "Apr 2024", y: 150 },
      { x: "May 2024", y: 140 },
      { x: "June 2024", y: 130 },
    ],
  },
  {
    id: "Emily Johnson",
    color: tokens("dark").redAccent[500],
    data: [
      { x: "Sep 2023", y: 110 },
      { x: "Oct 2023", y: 120 },
      { x: "Nov 2023", y: 130 },
      { x: "Dec 2023", y: 140 },
      { x: "Jan 2024", y: 150 },
      { x: "Feb 2024", y: 140 },
      { x: "Mar 2024", y: 130 },
      { x: "Apr 2024", y: 120 },
      { x: "May 2024", y: 110 },
      { x: "June 2024", y: 100 },
    ],
  },
];
