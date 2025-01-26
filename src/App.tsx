import React from 'react';
import {
  LucideMail,
  LucidePhone,
  LucideMapPin,
  LucideGithub,
  LucideDownload,
  LucideExternalLink,
  LucideCalendar,
  LucideUser,
  LucideGraduationCap,
  LucideAward,
  LucideHeart,
} from 'lucide-react';
import './App.css';
import image from './assets/image.jpg';
export const Card = ({ children, className = '', ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

export const Button = ({ children, className = '', onClick, ...props }) => (
  <button className={`button ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`card-content ${className}`} {...props}>
    {children}
  </div>
);

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen p-6 flex justify-center">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-2xl">
        <CardContent className="p-8 md:p-12">
          {/* Header with Profile Image */}
          <div className="text-center mb-12 section-fade-in">
            <div className="mb-6 relative">
              <div className="w-40 h-40 mx-auto relative">
                <img
                  src={image}
                  alt="Phạm Văn Quyết"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              PHẠM VĂN QUYẾT
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              LẬP TRÌNH VIÊN DEV
            </p>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-3">
              <div className="contact-info-item flex items-center">
                <LucideUser className="w-5 h-5 text-blue-600" />
                <span className="ml-3 text-gray-700">Nam</span>
              </div>
              <div className="contact-info-item flex items-center">
                <LucideCalendar className="w-5 h-5 text-blue-600" />
                <span className="ml-3 text-gray-700">01-01-2001</span>
              </div>
              <div className="contact-info-item flex items-center">
                <LucideMail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:pvanquyet363@gmail.com"
                  className="ml-3 text-gray-700 hover:text-blue-600"
                >
                  pvanquyet363@gmail.com
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="contact-info-item flex items-center">
                <LucidePhone className="w-5 h-5 text-blue-600" />
                <a
                  href="tel:0347151298"
                  className="ml-3 text-gray-700 hover:text-blue-600"
                >
                  0347151298
                </a>
              </div>
              <div className="contact-info-item flex items-center">
                <LucideMapPin className="w-5 h-5 text-blue-600" />
                <span className="ml-3 text-gray-700">
                  Ngõ Gốc Đề, Quận Hoàng Mai, Hà Nội
                </span>
              </div>
              <div className="contact-info-item flex items-center">
                <LucideGithub className="w-5 h-5 text-blue-600" />
                <a
                  href="https://github.com/VanQuyet5H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-gray-700 hover:text-blue-600"
                >
                  GitHub: VanQuyet5H
                </a>
              </div>
            </div>
          </div>

          {/* Objective */}
          <section className="mb-12 section-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-500 pb-2">
              Mục tiêu nghề nghiệp
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tôi là lập trình viên chuyên về phát triển phần mềm, đặc biệt với
              .NET và React, với 2 năm kinh nghiệm làm việc trong các dự án thực
              tế. Mục tiêu của tôi là phát triển sự nghiệp trong môi trường sáng
              tạo, nơi tôi có thể sử dụng kiến thức kỹ thuật để tạo ra các ứng
              dụng web hiệu quả và có tính sáng tạo cao. Tôi mong muốn góp phần
              vào sự phát triển của công ty và tiếp tục học hỏi để nâng cao kỹ
              năng của mình.
            </p>
          </section>

          {/* Education */}
          <section className="mb-12 section-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-500 pb-2">
              <span className="flex items-center">
                <LucideGraduationCap className="w-6 h-6 mr-2" />
                Học vấn
              </span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">
                  HỌC VIỆN NÔNG NGHIỆP VIỆT NAM
                </h3>
                <p className="text-gray-600">08/2019 - 08/2023</p>
                <p className="font-medium">Cử Nhân Công Nghệ Thông Tin</p>
                <p className="text-gray-700">GPA: 3.1/4.0</p>
                <div className="mt-2">
                  <p className="font-medium">Học bổng:</p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Kỳ I (2019-2020)</li>
                    <li>Kỳ II (2019-2020)</li>
                    <li>Kỳ IV (2020-2021)</li>
                    <li>Kỳ VI (2021-2022)</li>
                    <li>Kỳ VII (2022-2023)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="mb-12 section-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-500 pb-2">
              <span className="flex items-center">
                <LucideHeart className="w-6 h-6 mr-2" />
                Hoạt động
              </span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Câu lạc bộ Lập trình</h3>
                <p className="text-gray-600">11/2019 - 01/2020</p>
                <ul className="list-disc ml-5 text-gray-700 mt-2">
                  <li>
                    Tham gia tổ chức các buổi hội thảo chia sẻ kiến thức về lập
                    trình và phát triển phần mềm
                  </li>
                  <li>
                    Hướng dẫn các thành viên mới về các công nghệ và công cụ lập
                    trình
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Chương trình đào tạo kỹ năng mềm
                </h3>
                <p className="text-gray-600">01/2021 - 04/2021</p>
                <ul className="list-disc ml-5 text-gray-700 mt-2">
                  <li>Hoàn thành khóa học về kỹ năng giao tiếp và lãnh đạo</li>
                  <li>
                    Được trang bị các kỹ năng quản lý thời gian và làm việc nhóm
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Tình nguyện viên tại đồ cũ là vàng
                </h3>
                <p className="text-gray-600">01/2021 - 04/2021</p>
                <ul className="list-disc ml-5 text-gray-700 mt-2">
                  <li>
                    Tổ chức các hoạt động thiện nguyện, phát quà cho người nghèo
                    trong dịp lễ Tết
                  </li>
                  <li>
                    Tham gia vận hành các hoạt động chăm sóc cộng đồng và bảo vệ
                    môi trường
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12 section-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-500 pb-2">
              Kinh nghiệm làm việc
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Thực tập tại Trí Nam Group',
                  period: '01/2022 – 12/2022',
                  tasks: [
                    'Nghiên cứu công nghệ Dnn',
                    'Phát triển ứng dụng Webform quản lý nhà hàng (ASP.NET MVC)',
                    'Xây dựng ứng dụng Winform quản lý kho thuốc',
                    'Đồ án môn học quản lý thông tin nhân viên sử dụng công nghệ .NET Core 3.1',
                  ],
                  github: 'https://github.com/minh7tu/VNUA_FITA_HRM',
                },
                {
                  title: 'Lập trình viên Backend tại Bệnh viện Quốc tế Bắc Hà',
                  period: '01/2023 – 01/2024',
                  tasks: [
                    'Phát triển và bảo trì các ứng dụng backend sử dụng công nghệ .NET Core',
                    'Thiết kế và tối ưu hóa cơ sở dữ liệu SQL Server',
                    'Xây dựng và tích hợp API RESTful',
                    'Viết tài liệu kỹ thuật và hướng dẫn sử dụng',
                    'Học hỏi và áp dụng phương pháp Agile/Scrum',
                  ],
                  github: 'https://github.com/VanQuyet5H/BackEndBenhVienBacHa',
                },
                {
                  title: 'Nhân viên IT tại CCK Software',
                  period: '01/2024 – 08/2024',
                  tasks: [
                    'Hỗ trợ xử lý các vấn đề kỹ thuật về phần mềm và hệ thống IT',
                    'Giám sát, bảo trì và nâng cấp thiết bị phần cứng, mạng nội bộ',
                    'Hỗ trợ khách hàng sử dụng phần mềm tự động hóa trên Facebook, TikTok, Zalo',
                    'Phối hợp với đội phát triển để hoàn thành dự án đúng tiến độ',
                    'Viết tài liệu hướng dẫn và thực hiện cập nhật định kỳ',
                  ],
                },
                {
                  title: 'Dự án cá nhân: Ứng dụng quản lý chăn nuôi',
                  period: '08/2024 – 01/2025',
                  description:
                    'Ứng dụng được thiết kế để hỗ trợ quản lý toàn diện các hoạt động chăn nuôi, bao gồm quản lý vật nuôi, thông tin chuồng trại, theo dõi tăng trưởng và sức khỏe vật nuôi.',
                  features: [
                    {
                      title: 'Quản lý thông tin vật nuôi',
                      items: [
                        'Lưu trữ thông tin chi tiết về vật nuôi (loại vật nuôi, giống, ngày nhập, trọng lượng, tình trạng sức khỏe)',
                        'Theo dõi lịch sử tiêm phòng, điều trị bệnh, và các hoạt động thú y (cập nhật tự động các mũi tiêm, liều lượng thuốc đã sử dụng)',
                        'Gắn thẻ ID để nhận diện và quản lý từng vật nuôi riêng biệt (sử dụng mã vạch hoặc chip RFID để dễ dàng nhận diện vật nuôi)',
                      ],
                    },
                    {
                      title: 'Quản lý chuồng trại',
                      items: [
                        'Lưu trữ thông tin chuồng trại (kích thước, vị trí, sức chứa, tình trạng vệ sinh)',
                        'Quản lý số lượng vật nuôi trong từng chuồng (cập nhật số lượng và tình trạng vật nuôi trong chuồng)',
                        'Theo dõi tình trạng vệ sinh và bảo trì chuồng trại định kỳ (lập lịch làm vệ sinh chuồng trại, kiểm tra tình trạng thiết bị)',
                      ],
                    },
                    {
                      title: 'Hệ thống thông báo',
                      items: [
                        'Cảnh báo lịch tiêm phòng, bổ sung thức ăn, và các sự kiện quan trọng khác (thông báo trước ngày tiêm phòng để không bỏ lỡ lịch)',
                        'Thông báo qua email và mobile (nhận thông báo qua các kênh khác nhau như email, SMS, và ứng dụng di động)',
                        'Theo dõi sự kiện quan trọng (nhận thông báo về sự kiện đặc biệt như sinh sản, thay đổi tình trạng sức khỏe)',
                      ],
                    },
                    {
                      title: 'Quản lý thức ăn và lịch trình',
                      items: [
                        'Ghi nhận loại thức ăn, số lượng sử dụng, và nhà cung cấp (theo dõi nguồn gốc và chi phí thức ăn)',
                        'Lên lịch phân phối thức ăn tự động theo nhóm vật nuôi và nhu cầu dinh dưỡng (tự động hóa phân phối thức ăn theo nhu cầu từng vật nuôi)',
                        'Thống kê chi phí thức ăn và dự báo nhu cầu nhập khẩu trong tương lai (phân tích và lập kế hoạch nhập khẩu thức ăn)',
                      ],
                    },
                    {
                      title: 'Quản lý hoạt động thú y',
                      items: [
                        'Ghi nhận và quản lý lịch sử khám bệnh, điều trị, và thuốc đã sử dụng cho từng vật nuôi',
                        'Theo dõi lịch tái khám và kiểm tra sức khỏe định kỳ (quản lý lịch tái khám và nhắc nhở người dùng)',
                      ],
                    },
                    {
                      title: 'Quản lý bán vật nuôi',
                      items: [
                        'Theo dõi thông tin vật nuôi đã bán, bao gồm giá cả, khách hàng, và thời gian bán',
                        'Lập báo cáo doanh thu từ hoạt động bán vật nuôi (bao gồm phân tích lợi nhuận theo từng giao dịch)',
                      ],
                    },
                    {
                      title: 'Lập báo cáo và phân tích',
                      items: [
                        'Báo cáo về tăng trưởng vật nuôi, sản lượng đầu ra (thịt, trứng, sữa)',
                        'Phân tích chi phí, lợi nhuận, và hiệu suất chăn nuôi theo chu kỳ hoặc năm',
                        'Đưa ra các biểu đồ trực quan giúp người dùng dễ dàng theo dõi hiệu quả hoạt động',
                      ],
                    },
                    {
                      title: 'Quản lý tài khoản hệ thống người dùng',
                      items: [
                        'Hỗ trợ phân quyền người dùng (quản trị viên, nhân viên, khách hàng)',
                        'Theo dõi và quản lý hoạt động của từng tài khoản trên hệ thống',
                        'Đảm bảo tính bảo mật với các chức năng đăng nhập, xác thực hai yếu tố (2FA)',
                      ],
                    },
                  ],
                  tech: [
                    'Front-end: React.js',
                    'Back-end: .NET Core',
                    'Database: SQL Server',
                    'Deployment: Docker',
                  ],
                  github: 'https://github.com/VanQuyet5H/QLCN',
                },
              ].map((exp, index) => (
                <div key={index} className="timeline-item">
                  <h3 className="font-bold text-lg text-blue-800">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{exp.period}</p>
                  {exp.description && (
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                  )}
                  {exp.tasks && (
                    <ul className="list-disc ml-5 text-gray-700 space-y-1">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  )}
                  {exp.features && (
                    <div className="mt-4 space-y-4">
                      {exp.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>
                          <h4 className="font-semibold text-blue-700">
                            {feature.title}
                          </h4>
                          <ul className="list-disc ml-5 text-gray-700 space-y-1">
                            {feature.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <h4 className="font-semibold text-blue-700">
                          Công nghệ sử dụng
                        </h4>
                        <ul className="list-disc ml-5 text-gray-700 space-y-1">
                          {exp.tech.map((tech, techIndex) => (
                            <li key={techIndex}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
                    >
                      <LucideExternalLink className="w-4 h-4 mr-1" />
                      Xem trên GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12 section-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-500 pb-2">
              Kỹ năng
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Kỹ năng kỹ thuật</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Lập trình:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'C#',
                        '.NET Core',
                        'React.js',
                        'JavaScript',
                        'Java',
                        'PHP',
                        'Python',
                        'HTML/CSS',
                      ].map((skill) => (
                        <span key={skill} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">
                      Cơ sở dữ liệu:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['SQL Server', 'MongoDB', 'MySQL'].map((skill) => (
                        <span key={skill} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Công cụ:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Git/GitHub',
                        'Docker',
                        'Visual Studio',
                        'VS Code',
                        'Postman',
                      ].map((skill) => (
                        <span key={skill} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Kỹ năng mềm</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Giao tiếp hiệu quả với đồng nghiệp và khách hàng</li>
                  <li>Làm việc nhóm tốt, hỗ trợ và học hỏi từ đồng nghiệp</li>
                  <li>Khả năng phân tích và giải quyết vấn đề</li>
                  <li>Quản lý thời gian và hoàn thành công việc đúng hạn</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact References */}
          <section className="mb-12 section-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-500 pb-2">
              Người liên hệ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">Bố</h3>
                <p className="text-gray-700">Chức vụ: Bán Hàng</p>
                <p className="text-gray-700">Số điện thoại: 0902532065</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">Mẹ</h3>
                <p className="text-gray-700">Chức vụ: Bán Hàng</p>
                <p className="text-gray-700">Số điện thoại: 0865252875</p>
              </div>
            </div>
          </section>

          {/* Hobbies */}
          <section className="mb-12 section-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-500 pb-2">
              Sở thích
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Chạy bộ', 'Chơi game', 'Đọc sách', 'Nghe nhạc'].map(
                (hobby) => (
                  <span key={hobby} className="skill-badge">
                    {hobby}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Footer */}
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
              <LucideDownload className="w-5 h-5 mr-2" />
              Tải CV PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
