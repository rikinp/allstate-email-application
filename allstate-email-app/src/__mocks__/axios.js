const mockResponse = {
    data: {
        results: [
            {
                id: 1,
                subject: "Test Email 1",
                body: "This is a test email 1",
                seen: false,
              },
              {
                id: 2,
                subject: "Test Email 2",
                body: "This is a test email 2",
                seen: true,
              },
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}