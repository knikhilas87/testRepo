namespace WebAPPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addPartnerTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.PartnerDetails",
                c => new
                    {
                        ApplicationID = c.Int(nullable: false, identity: true),
                        PartnerName = c.String(nullable: false),
                        NoOfInsured = c.Int(nullable: false),
                        NoOfSeniorInsured = c.Int(nullable: false),
                        Revenue = c.Int(nullable: false),
                        Year = c.String(),
                        SubmittedDate = c.DateTime(nullable: false),
                        ListType = c.String(),
                    })
                .PrimaryKey(t => t.ApplicationID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.PartnerDetails");
        }
    }
}
