import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridApi, ColDef, GridReadyEvent, CheckboxSelectionCallbackParams, HeaderCheckboxSelectionCallbackParams } from 'ag-grid-community';
import { RegisterGetAllStudentsService } from 'src/app/Services/Register_GetAllStudent/register-get-all-students.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
 ngOnInit(): void {
 }

 constructor(private http:HttpClient,private studentService:RegisterGetAllStudentsService){}
 /////////////////////////Ag-grid module///////////////////////////////
 @ViewChild('agGrid') agGrid: any;

 private gridApi!: GridApi<any>;
 public defaultColDef: ColDef = {
   flex: 1,
   minWidth: 100,
   headerCheckboxSelection: isFirstColumn,
   checkboxSelection: isFirstColumn,
 };

 columnDefs: ColDef[] = [
   { headerName: 'StudentName ', field: 'studentName', filter: 'agTextColumnFilter',
     floatingFilter: true, },
   { headerName: 'StudentCode ', field: 'studentCode', filter: 'agTextColumnFilter',
     floatingFilter: true, },
   { headerName: 'Department', field: 'studentDepartment', filter: 'agTextColumnFilter',
     floatingFilter: true, },
   { headerName: 'Gender', field: 'studentGender', filter: 'agTextColumnFilter',
     floatingFilter: true, },
   { headerName: 'Email', field: 'studentEmailId', filter: 'agTextColumnFilter',
     floatingFilter: true, },
   { headerName: 'DOB', field: 'dob', filter: 'agTextColumnFilter',
     floatingFilter: true, },

  
 
 ];

 public rowSelection: 'single' | 'multiple' = 'multiple';
 public rowData: any[]=[];
 public themeClass: string =
   "ag-theme-quartz";

 onGridReady(params: GridReadyEvent<any>) {
   this.gridApi = params.api;
   this.studentService.getAllStdents().subscribe((response:any) => (this.rowData = response));
 }


}

function isFirstColumn(
 params:
   | CheckboxSelectionCallbackParams
   | HeaderCheckboxSelectionCallbackParams
) {
 var displayedColumns = params.api.getAllDisplayedColumns();
 var thisIsFirstColumn = displayedColumns[0] === params.column;
 return thisIsFirstColumn;
}