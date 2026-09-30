module.exports = {
    slug: 'cv-ats',
    en: 'ats-friendly-resume',
    keyword: 'cv ats',
    tag: 'ATS',
    navTitle: 'CV chuẩn ATS',
    title: 'CV chuẩn ATS: cách vượt qua hệ thống lọc hồ sơ',
    h1: 'Cách làm CV thân thiện với ATS',
    description: 'Nhiều công ty lọc CV bằng hệ thống ATS. Tìm hiểu cách phần mềm này đọc CV và dùng danh sách kiểm tra về định dạng, từ khóa và loại file để vượt qua.',
    cardText: 'ATS đọc CV thế nào và danh sách kiểm tra định dạng.',
    lede: 'Trước khi người thật đọc CV, thường phần mềm đã đọc trước. Hãy chắc chắn nó đọc đúng thông tin của bạn.',
    tldr: ['Tiêu đề chuẩn: Work Experience, Education, Skills.', 'PDF chữ thật hoặc Word.', 'Dùng từ khóa trong tin tuyển dụng.', 'Không dùng bảng hay chữ trong hình.'],
    sections: [
        { id: 'checklist', h2: 'Danh sách kiểm tra', html: `<ul><li>Bố cục một cột.</li><li>Phông chuẩn.</li><li>Định dạng ngày thống nhất (Jan 2023 – Present).</li><li>Viết đầy đủ từ viết tắt: SEO (Search Engine Optimization).</li><li>Tên file: Ho-Ten-CV.pdf.</li></ul>` },
        { id: 'hieu-lam', h2: 'Hiểu lầm', html: `<p>Giấu từ khóa bằng chữ trắng sẽ bị phát hiện khi người thật đọc. Hãy dùng từ khóa tự nhiên trong phần kinh nghiệm.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV chuẩn ATS trong CV Builder',
        intro: 'Chọn mẫu đơn giản — file PDF chứa chữ thật mà ATS đọc được.',
        screenshot: 2,
        steps: [['Mẫu đơn giản', 'Một cột.'], ['Mục chuẩn', 'Tiêu đề rõ ràng.'], ['Từ khóa', 'Từ tin tuyển dụng.'], ['Download PDF', 'Chữ thật.']],
        outro: 'Xuất PDF thuộc gói premium (có dùng thử miễn phí). Không ứng dụng nào đảm bảo vượt qua một ATS cụ thể.'
    },
    faq: [
        { q: 'ATS có đọc được PDF không?', a: 'PDF chữ thật thường đọc được. Nếu tin tuyển dụng yêu cầu Word thì gửi Word.' },
        { q: 'Ảnh có ảnh hưởng ATS không?', a: 'Hệ thống không đọc ảnh; ảnh chỉ chiếm chỗ.' }
    ],
    related: ['cv-theo-vi-tri', 'mau-cv', 'cv-pdf-iphone']
};
