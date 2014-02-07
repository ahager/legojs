require "rubygems"
require "rake"

task :watch do
  sassPid = Process.spawn("sass --watch --sourcemap sass:css")

  trap("INT") do
    Process.kill(9, sassPid) rescue Errno::ESRCH
    exit 0
  end

  Process.wait(sassPid)
end

task default: [:watch]
